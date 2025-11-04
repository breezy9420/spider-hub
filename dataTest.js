import dayjs from "dayjs";

const a= dayjs(1762277052102).format("YYYYMMDDHHmmssSSS")
console.log(a);


Date.now = function () {
  return 123;
};

// console.log(Date.now());
