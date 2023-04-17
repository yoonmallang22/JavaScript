// 문자열 한 개만 매칭되어 변경
"paullab CEO leehojun hello CEO".replace("CEO", "CTO"); // 'paullab CTO leehojun hello CEO'
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자구분X)
"paullab CEO leehojun hello CEO".replace(/CEO/g, "CTO"); // 'paullab CTO leehojun hello CTO'
// 패턴을 찾아서 Array로 반환
"paullab CEO leehojun hello CEO".match(/CEO/g); // ['CEO', 'CEO']
// 패턴으로 split
"paullab CEO leehojun hello CEO".split(/CEO/g); // ['paullab ', ' leehojun hello ', '']
// 패턴이 들어가있으면 true 없으면 false
/CEO/g.test("paullab CEO leehojun hello CEO"); // true

/* ----------------------------------- */

// 알고리즘 문제 풀이할 때 주의사항
// ! 개수를 알고 싶어서 split을 하면 내가 원하는 개수보다 1개가 더 추가되어 나온다
"!!!".split("!"); // ['', '', '', '']
"!a!a!a".split("!"); // ['', 'a', 'a', 'a']
"a!a!a!".split("!"); // ['a', 'a', 'a', '']

"!!!".split("!").length - 1; // 3	// -1 해줘야 원하는 개수가 나옴

/* ----------------------------------- */

// 1번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}
"BCBdbe".split("B").join(""); // 'Cdbe'

// 오답 : 1개만 바꾼다
function solution(my_string, letter) {
  return my_string.replace(letter, "");
}
"BCBdbe".replace("B", ""); // 'CBdbe'

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이 아니라 별도로 생성을 해주어야 한다
function solution(my_string, letter) {
  return my_string.replace(`/${letter}/g`, "");
}
"BCBdbe".replace("B", ""); // 'CBdbe'
let letter = "B";
"BCBdbe".replace(`/${letter}/g`, ""); // 'BCBdbe'

// 정답
function solution(my_string, letter) {
  // new RegExp(패턴으로 사용할 문자열, 플래그)
  // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있다
  let reg = new RegExp(letter, "g");
  return my_string.replace(reg, "");
}
"BCBdbe".replace(/B/g, ""); // 'Cdbe'
"BCBdbe".replace(new RegExp("B", "g"), ""); // 'Cdbe'

// 2번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 정답 유형1 : 숫자를 찾는다
function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
"aAb1B2cC34oOp".match(/[0-9]/g).reduce((a, b) => parseInt(a) + parseInt(b), 0); // 10
"aAb1B2cC34oOp"
  .match(/[0-9]/g)
  .map((x) => parseInt(x))
  .reduce((a, b) => a + b, 0); // 10

// 정답 유형2 : 문자를 제거한다
function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
"aAb1B2cC34oOp"
  .replace(/[^0-9]/g, "")
  .split("")
  .reduce((a, b) => parseInt(a) + parseInt(b), 0); // 10

// 3번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120891

// 오답 : null일때 length가 없디
function solution(order) {
  return order.toString().match(/[369]/g).length;
}
(163009).toString().match(/[369]/g); // ['6', '3', '9']
(0).toString().match(/[369]/g); // null
(10).toString().match(/[369]/g); // null

// 정답
function solution(order) {
  let value = order.toString().match(/[369]/g) ?? [];
  return value.length;
}

function solution(order) {
  return (order.toString().match(/[369]/g) ?? []).length;
}

// 4번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120913

// 아래와 같이 풀 수 있지만 정규표현식을 사용하면 더 간단해진다
function solution(my_str, n) {
  let result = [];
  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
  }
  return result;
}

// [0-9][0-9][0-9][0-9]
// [0-9]{1,n}
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g); // ['abc1', 'Addf', 'ggg4', '556b']
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g); // ['abc', '1Ad', 'dfg', 'gg4', '556']
"abc1Addfggg4556b".match(/\w{3}/g); // 문자		 // ['abc', '1Ad', 'dfg', 'gg4', '556']
"abc1Addfggg4556b".match(/\d{3}/g); // 숫자		 // ['455']
"abc1Addfggg4556b".match(/.{3}/g); // 모든문자	// ['abc', '1Ad', 'dfg', 'gg4', '556']
"".match(/.{3}/g); // 주의 : null

// 오답 : 마지막에 남은 것을 리턴해주지 않는다
function solution(my_str, n) {
  let reg = new RegExp(`.{${n}}`, "g");
  return my_str.match(reg);
}

// 정답
function solution(my_str, n) {
  let reg = new RegExp(`.{1,${n}}`, "g");
  return my_str.match(reg);
}

function solution(my_str, n) {
  let reg = new RegExp(`\\w{1,${n}}`, "g"); // '\'를 표현하기 위해서 '\\'를 사용
  return my_str.match(reg);
}

// 5번 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120864

// 오답
function solution(my_string) {
  return my_string.match(/\d+/g).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

// 정답
function solution(my_string) {
  return (my_string.match(/\d+/g) ?? []).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
"aAb1B2cC34oOp".match(/\d/g); // ['1', '2', '3', '4']
"aAb1B2cC34oOp".match(/\d+/g); // ['1', '2', '34']
"aAb1B2c111C34oO123p".match(/\d+/g); // ['1', '2', '111', '34', '123']

// 그룹 연습문제
"gogaooogogooo".match(/(go)/g); // ['go', 'go', 'go']
"gogaooogogooo".match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.
// 87a99b00fww89e -> ['87a', '99b', '00f', '89e']
"87a99b00fww89e".match(/[0-9][0-9][a-zA-Z]/g);
"87a99b00fww89e".match(/([0-9][0-9])([a-zA-Z])/g); // 숫자 그룹과 문자 그룹으로 나눕니다
"87a99b00fww89e".match(/([0-9]{2})([a-zA-Z])/g);
"87a99b00fww89e".match(/(\d{2})([a-zA-Z])/g);

// 6번 문제
// https://jsalgo.co.kr/?page=2#
"a10b9r1ce33uab8wc918v2cv11v9".match(/[rev][0-9]/g); // ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 r, e, v 뒤에 숫자가 10이 있을 경우 오답
"a10b9r10ce33uab8wc918v2cv11v9".match(/[rev][0-9]/g); // ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 뽑으면 e가 33이 뽑히므로 오답
"a10b9r10ce33uab8wc918v2cv11v9".match(/[rev]\d+/g); // ['r10', 'e33', 'v2', 'v11', 'v9']

// 아래처럼 뽑으면 v가 11이 뽑히므로 오답
"a10b9r10ce33uab8wc918v2cv11v9".match(/[rev][1]?[0-9]/g); // ['r10', 'e3', 'v2', 'v11', 'v9']

// 정답
"a10b9r10ce33uab8wc918v2cv11v9".match(/([rev])(10|[0-9])/g).reduce((a, b) => parseInt(a) + parseInt(b), 0);
function solution(data) {
  let result = data
    .match(/([rev])(10|[0-9])/g)
    .reduce((a, b) => a + parseInt(b.slice(1)), 0)
    .toString();
  // 좀 더 쉽지만 효율적이지 않다
  // let result = data.match(/([rev])(10|[0-9])/g).map(v => parseInt(v.slice(1))).reduce((a, b) => a + b, 0)
  return `${result[0]}월 ${result[1]}일`;
}

/* ----------------------------------- */

// replace 심화
const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`;

// $1, $2: 정규 표현식 패턴에서 매칭되는 괄호들에 해당하는 결과들
let result1 = string.replace(/(\w+), (\w+)/gm, "$2 $1");
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, "$2_$1");
console.log(result2);
let result3 = string.replace(/(\w+), (\w+)/gm, "$1님 안녕하세요.");
console.log(result3);
let result4 = string.replace(/(\w+), (\w+)/gm, "$2 $1!!$1!!$1");
console.log(result4);
