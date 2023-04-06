// 구구단
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

let i = 2;
while (i < 10) {
  let j = 1;
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  i++;
}
// 오답
// let i = 2;
// let j = 1;
// while (i < 10) {
//     // j = 1 // 이 코드를 넣어야 정답. 없으면 j가 계속 10이기 때문
//     while (j < 10) {
//         console.log(`${i} x ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
// }

/* ----------------------------------- */

// 문자열 뒤집기
let str = "hello world";
let result = "";
for (let i = 0; i < str.length; i++) {
  // result = result + str[i];
  result = str[i] + result;
}
console.log(result);

let result2 = "";
let ii = 0;
while (ii < str.length) {
  result2 = str[ii] + result2;
  ii++;
}
console.log(result2);

/* ----------------------------------- */

// 팩토리얼
let m = 1;
for (let i = 1; i < 6; i++) {
  m *= i;
}
console.log(s);

let mm = 1;
let iii = 1;
while (iii < 6) {
  mm *= iii;
  iii++;
}
console.log(mm);
