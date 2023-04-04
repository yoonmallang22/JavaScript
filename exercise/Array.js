const arr = [10, 20, 30];
arr[0] = 100; // 가변, mutable

console.log(arr); // [100, 20, 30]
console.dir(arr); // 프로퍼티와 메서드를 볼 수 있다

const str = "hello world";
str[0] = "i"; // 불변, immutable
console.log(str); // hello world

/* ---- push() ---- */
const arr1 = [1, 2, 3];
arr1.push(4); // 4
arr1; // [1, 2, 3, 4]

/* ---- pop() ---- */
const arr2 = [1, 2, 3, 4, 5];
let lastValue = arr2.pop();
arr2; // [1, 2, 3, 4]
lastValue; // 5

/* ---- unshift() ---- */
const arr3 = ["사과", "바나나", "수박"];
arr3.unshift("오이", "배");
arr3; // ["오이", "배", "사과", "바나나", "수박"]

/* ---- shift() ---- */
const arr4 = ["사과", "바나나", "수박"];
let firstValue = arr4.shift();
arr4; // ["바나나", "수박"]
firstValue; // 사과

/* ---- splice(start, deleteCount, items) ---- */
const arr5 = [1, 2, 3];
arr5.splice(1, 0, 4); // []
arr5; // [1, 4, 2, 3]

const arr6 = [1, 2, 3];
arr6.splice(1, 0, [10, 20, 30]);
arr6; // [1, [10, 20, 30], 2, 3]

const arr7 = [1, 2, 3];
arr7.splice(1, 0, ...[10, 20, 30]);
arr7; // [1, 10, 20, 30, 2, 3]

const arr8 = [10, 20, 30, 40, 50];
arr8.splice(2, 2); // [30, 40]
arr8; // [10, 20, 50]

const arr9 = [10, 20, 30, 40, 50];
arr9.splice(2, 1, 5); // [30]
arr9; // [10, 20, 5, 40, 50]

const arr10 = [10, 20, 30, 40, 50];
arr10.splice(1); // [20, 30, 40, 50]
arr10; // [10]

const quiz = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 1, 2, 3, 50]
quiz.splice(1, 0, ...x);
quiz.splice(6, 1, ...x);
quiz; // [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
// 메서드 체이닝이 의도한 대로 안나오는 이유는 splice는 삭제된 값을 반환하기 때문이다.

/* ---- slice(start, end) ---- */
const arr11 = ["apple", "banana", "cherry", "durian", "elderberry"];
arr11.slice(1, 4); // ["banana", "cherry", "durian"]
arr11; // ["apple", "banana", "cherry", "durian", "elderberry"]
arr11.slice(1); // ["banana", "cherry", "durian", "elderberry"]
arr11.slice(0, 100); // ["apple", "banana", "cherry", "durian", "elderberry"]

/* ---- forEach(callbackfn: (value, index, array) => void) ---- */
const arr12 = [10, 20, 30];
arr12.forEach(function (item, index) {
  console.log(index);
});
/*
0
1
2
*/

arr12.forEach(function (item, index) {
  console.log(index, item);
  console.log("hello");
  console.log("world");
});
/*
0 10
hello
world
1 20
hello
world
2 30
hello
world
*/

arr12.forEach(function (item, index, arr) {
  console.log(index, item, arr);
  console.log("hello");
  console.log("world");
});
/*
0 10 [10, 20, 30]
hello
world
1 20 [10, 20, 30]
hello
world
2 30 [10, 20, 30]
hello
world
*/

const arr13 = Array(10).fill(0);
const arr14 = [];

// 같은 코드 1(이름이 없는 함수 사용)
arr13.forEach(function (item, index) {
  arr14.push(index + 1);
});
// 같은 코드 2(화살표 함수 사용)
arr13.forEach((item, index) => {
  arr14.push(index + 1);
});
// 같은 코드 3(중괄호를 생략한 화살표 함수 사용, 주로 실무에서 이렇게 사용한다.)
arr13.forEach((item, index) => arr16.push(index + 1));
// 같은 코드 4(이름이 있는 함수 사용, 이렇게는 사용하지 않는다.)
function 함수(item, index) {
  arr14.push(index + 1);
}
arr13.forEach(함수);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// NodeList에서 forEach와 Array에서 forEach는 다르다.
// NodeList에서 forEach는 익스플로러를 지원하지 않는다.

/* ---- map() ---- */
// map 면접 질문에서도 많이 나온다. 데이터를 뽑으려고 많이 사용한다.
// map은 forEach와 다르게 새로운 배열을 생성한다.
const arr15 = Array(10).fill(0);
// 같은 코드 1
arr15.map(function (v, i) {
  return i; // 새로운 배열을 생성하니까 반환할 값을 return으로 반환한다
});
// 같은 코드 2
function 함수2(v, i) {
  return i;
}
arr15.map(함수2);
// 같은 코드 3
arr15.map((v, i) => i);
// 같은 코드 4
arr15.map((v, i) => {
  return i; // 개행을 할 때는 중괄호와 return을 써줘야한다
});
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/* ---- filter() ---- */
const arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr16.filter(function (el) {
  return el % 2 === 0;
});
// [2, 4, 6, 8, 10]
arr16.filter(function (el) {
  return el % 2 !== 0;
});
// [1, 3, 5, 7, 9]

// 짝수의 합
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

/* ---- reduce() ---- */
const arr17 = [1, 2, 3, 4, 5, 6];
arr17.reduce((a, c) => a + c, 0);	// 10

// 0을 항상 넣어주기!
const arr18 = [];
arr18.reduce((a, c) => a + c); // error

const arr19 = [];
arr19.reduce((a, c) => a + c, 0);	// 0

// 모음 제거
Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v));
// ['h', 'l', 'l', ' ', 'w', 'r', 'l', 'd']

/* ---- includes() ---- */
const arr20 = ["hello", "world", "mallang"];
arr20.includes("world"); // true
arr20.includes("yoonmallang"); // false
arr20.includes("mal"); // false

/* ---- join() ---- */
const arr21 = ["hello", "world", "mallang"];
arr21.join("!"); // hello!world!mallang

const arr22 = ["010", "5044", "2903"];
arr22.join("-"); // 010-5044-2903

const arr23 = [010, 5044, 2903];	// 이렇게 하면 안된다
arr23.join("-"); // 8-5044-2903
// 0b100	// b는 바이너리의 첫글자
// 0o100 // o는 옥타의 첫글자
// 0x100 // o는 헥사를 표현

/* ---- sort() ---- */
const avengers = ["아이언맨", "스파이더맨", "헐크", "토르"];
avengers.sort();	// ['스파이더맨', '아이언맨', '토르', '헐크']

// 사전식 정렬. 시간이 지나도 못바뀌는 내용이다
const nums = [3, 1, 8, 6];
nums.sort();	// [1, 3, 6, 8]

const nums2 = [3, 1, 11, 8, 6];
nums2.sort();	// [1, 11, 3, 6, 8]
// sort를 어느 알고리즘으로 할건지는 브라우저 자유다
// https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd

const nums3 = [3, 1, 11, 8, 6];
// 오름차순
nums3.sort((a, b) => a - b);
// 내림차순
nums3.sort((a, b) => b - a);

// 딥하게 sort를 탐색해보겠다?!
const nums4 = [3, 1, 11, 8, 6];
nums4.sort((a, b) => {
  console.log(a, b);
  console.log(a - b);
});