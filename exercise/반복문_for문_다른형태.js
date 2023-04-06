// for ... in 문
// IE에서도 사용 가능
let arr1 = [10, 20, 30, 40, 50];
for (const i in arr1) {
  // index를 가져온다
  console.log(arr2[i]);
}

let obj1 = { one: 10, two: 20 };
for (const i in obj1) {
  // key를 가져온다
  console.log(obj1[i]);
}

for (const i in "hello world") {
  console.log(i);
}

// 0~10의 합
let s = 0;
for (const i in ".".repeat(11)) {
  s += parseInt(i);
}
console.log(s);

/* ----------------------------------- */

// for ... of 문
// IE에서 사용 불가능
let arr2 = [10, 20, 30, 40, 50];

for (const item of arr2) {
  console.log(item);
}

let s2 = 0;
for (const item of arr2) {
  s2 += item;
}
console.log(s2);

let obj2 = { one: 10, two: 20 };

for (const item of obj2) {
  console.log(item);
}
// Uncaught TypeError: obj2 is not iterable
// of 뒤에 iterable한(순회가능한, 순서가 있는) 값이 나와야 한다

for (const item of "hello world") {
  console.log(item);
}

/* ----------------------------------- */

// for ... of 문, for ... in 문에서는 const가 왜 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst

/* ----------------------------------- */

// 기본 for문을 사용하는 것이 더 나은 경우
// 문제 https://codingdojang.com/scode/408?answer_mode=hide
const arr3 = [1, 3, 4, 8, 13, 17, 20];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i], arr3[i + 1]); // 마지막 값: 20 undefined
  console.log(arr3[i + 1] - arr3[i]);
}

for (let i = 0; i < arr3.length - 1; i++) {
  console.log(arr3[i], arr3[i + 1]); // 마지막 값: 17 20
  console.log(arr3[i + 1] - arr3[i]);
}
for (let i = 1; i < arr3.length; i++) {
  console.log(arr3[i - 1], arr3[i]); // 마지막 값: 17 20
  console.log(arr3[i] - arr3[i - 1]);
}

/* ----------------------------------- */

// Q. 다음 user의 나이 평균을 구하세요.
let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
];

let sum = 0;
for (let i = 0; i < user.length; i++) {
  sum += user[i].age;
}
console.log((sum / user.length).toFixed(2));

let sum2 = 0;
for (const i in user) {
  sum2 += user[i].age;
}
console.log((sum2 / user.length).toFixed(2));

let sum3 = 0;
for (const item of user) {
  sum3 += item.age;
}
console.log((sum3 / user.length).toFixed(2));

// age 필드가 없다면?(MongoDB의 경우)
let user2 = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    name: "Lamb Adams",
    gender: "male",
  },
];

// let sum2 = 0;
// for (const i of user2) {
//   console.log(i);
//   console.log(i.age);	// 마지막 값: undefined
//   console.log(sum2);	// 마지막 값: 102
//   console.log("----------");
//   sum2 += i.age;	// 마지막에 102 + undefined
// }
// console.log((sum2 / user2.length).toFixed(2));	// NaN

// 방법1
let sum4 = 0;
for (const i of user2) {
  console.log(i);
  console.log(i.age); // 마지막에 undefined
  console.log(sum4); // 마지막에 102
  console.log("----------");
  sum4 += i.age ?? 0; // 마지막에 102 + 0
}
console.log((sum4 / user2.length).toFixed(2)); // 25.50

// 방법2
let sum5 = 0;
for (const i of user2.map((v) => v.age)) {
  if (!!i) {
    sum5 += i;
  }
}
console.log((sum5 / user2.length).toFixed(2)); // 25.50

// 방법3 암기
let sum6 = user2
  .map((v) => v.age)
  .filter((v) => !!v)
  .reduce((acc, cur) => acc + cur, 0);
console.log((sum6 / user2.length).toFixed(2)); // 25.50
