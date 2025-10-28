import axios from "axios";
import {logger} from "../../util/logUtil.js";
import {sleep} from "../../util/index.js";
import {promises as fs} from "fs";

const COOKIE = "Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1754584833,1757141948; HMACCOUNT=15A4D224E171B74F; sessionid=eq4l5428e7np58p97i9m9pf7f87rhpwe; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1757149738";
const helper = {};

async function initWasm() {
    const wasmBuffer = await fs.readFile("./encrypt.wasm");
    const wasmModule = await WebAssembly.instantiate(wasmBuffer);
    helper.encrypt = wasmModule.instance.exports.encrypt;
}

async function parseInfo(i) {
    const d = {
        "iRmDq": function (i, j) {
            return i(j);
        },
        "GQcTJ": function (i, j) {
            return i / j;
        },
        "wUWKM": function (i, j, k) {
            return i(j, k);
        },
        "Saaxu": function (i, j) {
            return i(j);
        }
    };

    const e = d["iRmDq"](parseInt, Math["round"](d["GQcTJ"](new Date()["getTime"](), 0x3e8))["toString"]());
    let f = d["wUWKM"](helper.encrypt, i, e);
    const url = `https://www.mashangpa.com/api/problem-detail/11/data/`;

    try {
        const res = await axios({
            url,
            method: "get",
            headers: {
                referer: "https://www.mashangpa.com/problem-detail/11/",
                cookie: COOKIE,
            },
            params: {
                page: i,
                m: f,
                _ts: e
            }
        });
        return res.data.current_array;
    } catch (e) {
        console.log(e);
    }
}

async function main() {
    global.console = logger;
    await initWasm();
    const max = 20;
    const arr = [];
    for (let i = 1; i <= max; i++) {
        arr.push(...await parseInfo(i));
        console.log(`已爬取第 ${i} 页`);
        await sleep(1000);
    }
    console.log(arr.reduce((a, b) => a + b, 0));
}

main();
