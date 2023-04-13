// 집합, 합집합, 교집합, 차집합

// 실무에서는 많이 사용 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형

let s = new Set("aabbbccccdd"); // 중복 제거
console.log(s); // ['a', 'b', 'c', 'd']
console.log(s.size); // 4

let ss = new Set("aaabbbbcccdd");
console.log(ss.size);			// 4
console.log(ss.has("a"));	// true
console.log(ss.has("f"));	// false
console.log(ss.add("z"));	// Set(5) {'a', 'b', 'c', 'd', 'z'}
console.log(ss);					// Set(5) {'a', 'b', 'c', 'd', 'z'}

for (const i of ss) {
  console.log(i);
}
// a
// b
// c
// d
// z

let sss = new Set(["a", "a", "a", "b", "b", "b", "b", "c", "c", "c", "d", "d"]);
console.log(sss);	// Set(4) {'a', 'b', 'c', 'd'}

let a = new Set("abc");
let b = new Set("cde");

// 교집합
let cro = [...a].filter((e) => b.has(e));
console.log(cro); // ['c']

// 합집합
let union = new Set([...a].concat(...b));
let union = new Set([...a, ...b]);
console.log(union); // Set(5) {'a', 'b', 'c', 'd', 'e'}

// 차집합
let dif = [...a].filter((e) => !b.has(e));
console.log(dif); // ['a', 'b']

/* ----------------------------------- */

let 회사게시판 = ["이호준", "이호준", "이호준", "이호준", "이호준", "이호준", "이호준", "김연하", "김연하", "최흥석", "이나영"];
let 게시자 = new Set(회사게시판);

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
console.log(게시자.size);	// 4

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
}

// 엘레강스한 문법
let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1);
}

/*
// 1번째 순회 i에 '이호준'
map.get('이호준') // undefined
map.set('이호준', 1) // 최종

// 2번째 순회 i에 '이호준'
map.get('이호준') // 1
map.set('이호준', 2) // 최종
*/

/* ----------------------------------- */

// NaN과 undefined도 Set에 저장할 수 있다. 원래 NaN !== NaN이지만, Set에서 NaN은 NaN과 같은 것으로 간주된다.
let test = ["윤말랑", NaN, NaN, NaN];
let set = new Set(test);
console.log(set); // Set(2) {'윤말랑', NaN}

let ssss = new Set("aabbb");

// array와 다르게 value가 2번 반복이다
// IE10은 미지원
// ssss.forEach((value, value, set) => {});
ssss.forEach((a, b, set) => {
  console.log(a, b, set);
});
// a a Set(2) {'a', 'b'}
// b b Set(2) {'a', 'b'}

/* ---- 알고리즘 ---- */

// https://school.programmers.co.kr/learn/courses/30/lessons/120903
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120891
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order) // '29423'
    .split("") // ['2', '9', '4', '2', '3']
    .filter((num) => mySet.has(parseInt(num))).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}
