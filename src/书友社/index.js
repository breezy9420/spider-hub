import axios from "axios";
import { logger } from "../../util/logUtil.js";
import { sleep } from "../../util/index.js";
import { promises as fs } from "fs";
import pLimit from "p-limit";
import * as Cheerio from "cheerio";
import path from "path";
import { fileURLToPath } from "url";
import { HttpsProxyAgent } from "https-proxy-agent";

const proxyUrl = "http://brd-customer-hl_16e28667-zone-datacenter_proxy1:932evddewb4f@brd.superproxy.io:33335";
const optimizedAgent = new HttpsProxyAgent(proxyUrl, {
  timeout: 30000,
  keepAlive: true,
  keepAliveMsecs: 60000,
  maxSockets: 100,
  maxFreeSockets: 100,
  rejectUnauthorized: false,
});

const axiosInstance = axios.create({
  proxy: false,
  timeout: 30000,
  httpAgent: optimizedAgent,
  httpsAgent: optimizedAgent,
  headers: {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "accept-encoding": "gzip, deflate, br",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  },
});

async function requestWithRetry(config, maxRetries = 5, initialDelay = 2000) {
  let lastError;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await axiosInstance(config);
    } catch (error) {
      lastError = error;
      if (i < maxRetries - 1) {
        const delay = initialDelay * Math.pow(2, i);
        console.log(`请求失败，第${i + 1}次重试，延迟${delay}ms... 错误: ${error.message}`);
        await sleep(delay);
      }
    }
  }
  throw lastError;
}

// 获取当前文件目录（ES模块中替代__dirname）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function sanitizeFileName(name) {
  if (!name) return "unknown";
  const invalidCharsRegex = /[<>:"/\\|?*]/g;
  return name.replace(invalidCharsRegex, "_").trim();
}

// 爬取书友社小说 https://www.shuyous.com
const taskObj = {
  bookInfoUrl: "https://www.shuyous.com/book/3231024.html",
  saveRootPath: "G:\\source\\小说文本",
};

// 获取书详情：名称、章节数
async function getBookInfo(params) {
  const { bookInfoUrl } = params;
  const res = await requestWithRetry({
    url: bookInfoUrl,
    method: "get",
  });
  const $ = Cheerio.load(res.data);
  const bookName = $(".chapterBox div.name").text().trim();
  const regex = /(\d+)-(\d+)\.html$/;
  const txtbA = $(".chapterList .list .name a").eq(0).attr("href");
  const match = txtbA.match(regex);
  if (match) {
    return {
      chapterTotal: +match[2],
      bookName,
      bookId: +match[1],
    };
  }
  throw new Error("获取书详情错误");
}

// 获取章节列表
async function getChapterList(params) {
  const { bookId, chapterTotal } = params;
  const pageSize = 100;

  const fetchUtil = async (id, page) => {
    const res = await requestWithRetry({
      url: "https://www.shuyous.com/index.php?action=loadChapterPage",
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: `id=${id}&page=${page}`,
    });
    const { data } = res.data ?? {};
    if (data?.length) {
      console.log(`获取目录${page}成功,数量:${data.length}`);
      return data;
    }
  };
  const limit = pLimit(5);
  const taskList = [];
  for (let i = 1; i <= Math.ceil(chapterTotal / pageSize); i++) {
    taskList.push(limit(() => fetchUtil(bookId, i)));
  }
  const data = await Promise.all(taskList);
  return data.flat();
}

// 获取某一章节的内容
async function getChapterContent(chapterurl) {
  let ret = "";
  const utilFn = async (url) => {
    const res = await requestWithRetry({
      url: `https://www.shuyous.com${url}`,
      method: "get",
    });
    const $ = Cheerio.load(res.data);
    let content = $("#content p")
      //   .slice(1)
      .map((_, el) => $(el).text().trim())
      .get()
    // .join("\n");

    ret += content;

    const hasNext = ~$(".btnWhite").text().trim().indexOf("下一页");

    if (hasNext) {
      await utilFn($(".btnWhite").eq(2).attr("href"));
    }
  };

  await utilFn(chapterurl);

  return ret;
}

async function main() {
  global.console = logger;

  try {
    const bookInfo = await getBookInfo(taskObj);
    console.log(`获取详情成功:${JSON.stringify(bookInfo)}`);

    const safeBookName = sanitizeFileName(bookInfo.bookName);
    const bookPath = path.join(taskObj.saveRootPath, safeBookName);
    await fs.mkdir(bookPath, {
      recursive: true,
    });

    const chapterList = await getChapterList(bookInfo);
    console.log("获取章节数量:", chapterList.length);

    const limt = pLimit(5);
    const taskList = [];
    for (const chapter of chapterList) {
      taskList.push(
        limt(async () => {
          const content = await getChapterContent(chapter.chapterurl);
          if (content) {
            const safeChapterName = sanitizeFileName(chapter.chaptername);
            const chapterSavePath = path.join(
              bookPath,
              `${chapter.chapterorder}-${safeChapterName}.txt`,
            );
            await fs.writeFile(chapterSavePath, content, {
              encoding: "utf8",
            });
            console.log(`获取${chapter.chaptername}成功`);
          }
        }),
      );
    }
    await Promise.all(taskList);
  } catch (e) {
    console.error(e);
  }
}

main();
