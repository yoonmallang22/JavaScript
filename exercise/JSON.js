// JSON.parse(): JSON 문자열을 자바스크립트 객체로 변환
// JSON.stringify() : 자바스크립트 객체를 JSON 문자열로 변환

// JSON 홑따옴표 사용 불가능
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
obj; // {result: true, count: 42}

const json2 = "[1, 2, 3]";
const arr = JSON.parse(json2);
arr; // [1, 2, 3]

const json3 = "[1, 2, [1, 2, 3]]";
const arr2 = JSON.parse(json3);
arr2; // [1, 2, Array(3)]

const json4 = { result: true, count: 42 };
const str = JSON.stringify(json4);
str; // '{"result":true,"count":42}'

// 깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l); // [10, 20, 30]

// error
let l2 = [10, 20, 30];
let a2 = JSON.parse(`${l2}`);
a2[0] = 1000;

console.log(l2);
