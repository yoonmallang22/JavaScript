let txt = "ABCDEFGHIJK";

console.log(txt + txt); // ABCDEFGHIJKABCDEFGHIJK

console.log(txt[0]); // Sass는 1, 다른 프로그래밍 언어는 0부터 시작한다
console.log(txt[-1]); // JavaScript에서는 마이너스 인덱싱을 허락하지 않는다

console.log(txt.length); // 11

/* ---- indexOf(), search(), replace() ---- */
console.log(txt.indexOf("E")); // 4
console.log(txt.search("E")); // 4

console.log(txt.indexOf("Z")); // -1
console.log(txt.search("Z")); // -1

let regExp = /CD/;
console.log(txt.search(regExp)); // 2
// /010[ -.]?[0-9]+[ -.]?[0-9]+/ 핸드폰 번호

console.log(txt.replace("ABC", "hello")); // helloDEFGHIJK

let txt2 = "abcdeHelloabcde";
let regExp2 = /[A-Z]/g;
console.log(txt2.search(regExp2)); // 5

let txt3 = "abcdeHelloabcde";
let regExp3 = /[A-Z]/g;
console.log(txt2.replace(regExp2, "h")); // abcdehelloabcde

let txt4 = "abcdefghij";

/* ---- slice(), substring() ---- */
// slice(시작인덱스, 종료인덱스) : 시작인덱스부터 종료인덱스-1까지 반환한다
console.log(txt4.slice(1, 3)); // bc
console.log(txt4.slice(1)); // bcdefghij
console.log(txt4.slice(3, 1)); // undefined
console.log(txt4.slice(2, -3)); // cdefg
// -3을 인식해서 2번재부터 -3번재 이전까지 반환한다

// substring(시작인덱스, 종료인덱스) : 시작인덱스부터 종료인덱스-1까지 반환한다
console.log(txt4.substring(1, 3)); // bc
console.log(txt4.slice(1)); // bcdefghij
console.log(txt4.substring(3, 1)); // bc, slice()와 차이
// 시작인덱스가 종료인덱스보다 큰 경우 두 개의 인자를 바꾼 듯이 작동한다
console.log(txt4.substring(2, -3)); // ab
// 마이너스 값을 0으로 인식해서 txt.substring(2,0)이 된다

let txt5 = "paullab CEO leehojun CEO";

/* ---- replace(), replace(regExp), replacAll() ---- */
console.log(txt5.replace("CEO", "COO")); // paullab COO leehojun CEO
console.log(txt5.replace(/CEO/g, "COO")); // paullab COO leehojun COO

// 구 브라우저 지원이 안될 가능성이 크다 (회사 가서 확인 ex. 관공서)
console.log(txt5.replaceAll("CEO", "COO")); // paullab COO leehojun COO

/* ---- toLowerCase(), toUpperCase() ---- */
// 아이디를 소문자로 바꿔주기도 한다
console.log(txt5.toLowerCase()); // paullab ceo leehojun ceo
console.log(txt5.toUpperCase()); // PAULLAB CEO LEEHOJUN CEO

/* ---- includes() ---- */
// 많이 사용된다(특히 알고리즘 문제에서)
console.log(txt5.includes("CEO")); // true
console.log(txt5.includes("CDO")); // false

/* ---- 메서드 체이닝 ---- */
console.log(
  txt5.replace("CEO", "CDO").includes("CDO").toString().toUpperCase()
); // TRUE

/* ---- split() ----*/
// 어디서나 정말 많이 사용된다
console.log(txt5.split(" ")); // ['paullab', 'CEO', 'leehojun', 'CEO']

let text1 = "aa bb cc dd";
let text2 = "aa-bb-cc-dd";
let text3 = "aa,bb,cc,dd";
let text4 = "aa,bb-cc-dd";

// ['aa', 'bb', 'cc', 'dd']
console.log(text1.split(" "));
console.log(text2.split("-"));
console.log(text3.split(","));
console.log(text4.split(/[,-]/g));
console.log(text4.replace(",", "-").split("-"));

/* ---- trim() ---- */
// 자주 사용되지는 않지만 이걸 몰라서 직접 구현하면 번거로운 메서드
// 문자열의 앞뒤 공백을 제거한다
let txt6 = "        hello world";
console.log("        hello world"); //         hello world
console.log(txt6.replaceAll(" ", "")); // helloworld
console.log(txt6.trim()); // hello world

/* ---- padStart() ---- */
// 자릿수에 맞춰 값을 채운다
let str1 = "99";
console.log(str1.padStart(5, "0")); // 00099

let str2 = "99";
console.log(str1.padStart(5, "-")); // ---99
