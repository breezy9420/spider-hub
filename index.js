import axios from "axios";
import { logger } from "./util/logUtil.js";
import qs from "qs";
import pLimit from "p-limit";
import { sleep } from "./util/index.js";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwiNDIwMjAzMjAwMDA5MjEzNzI5XCIsXCJ0ZW5hbnRJZFwiOjksXCJ1c2VySWRcIjo2MzY2Nzk5OX0iLCJleHAiOjE3NDIzODA3NDUsImlhdCI6MTc0MjM1OTE0NX0.bLm_mMJ_licBRO_3PwJgmiSzUjIhsnktrs6NTidKtPY";

const courseId = "1565";
const majorId = "2497";

async function getCourseList() {
  const url = `http://frontapi.jxuxue.com/api/front/courseware/${majorId}/${courseId}`;
  const { data } = await axios.get(url, {
    headers: {
      Authorization: token,
    },
  });
  return data.data;
}

async function userLearning(courseItem) {
  const url = "http://frontapi.jxuxue.com/api/front/userLearning";
  const { coursewareId, coursewareName, duration, totalPlayTime } = courseItem;
  const payload = {
    majorId,
    courseId,
    coursewareId,
    currentPlayTime: duration,
    time: 10,
  };
  const { data } = await axios({
    url,
    method: "post",
    headers: {
      Authorization: token,
    },
    data: payload,
  });
  if (data.code === 0) {
    console.log(`${coursewareName} ${data.message}`);
  } else {
    console.error(`${coursewareName} ${data.message}`);
  }
}
async function main() {
  global.console = logger;
  const courseList = await getCourseList();
  const newCourseList = [];
  for (let index = 0; index < courseList.length; index++) {
    const item = courseList[index];
    if (item.fileType === "mp4") {
      newCourseList.push(item);
    }
  }
  const limit = pLimit(newCourseList.length);
  const courseTasks = newCourseList.map((course) =>
    limit(() => userLearning(course))
  );
  await Promise.all(courseTasks);
  console.log("done");
}

// main();

async function test() {
  const obj = {
    courseId: 1565,
    courseCode: "KC01108",
    courseName: "高级语言程序设计C＋＋",
    coursePicture: "",
    sortNumber: 1,
    tenantId: 1,
    semester: "5",
    majorId: 2497,
    learingProgress: 0,
    learingScore: 0,
    hasExam: 1,
  };
  const url = `http://frontapi.jxuxue.com/api/front/studentMajor/${obj.courseId}`;
  const { data } = await axios({
    url,
    method: "post",
    headers: {
      Authorization: token,
    },
    data: obj,
  });
  console.log(data);
}

test();
