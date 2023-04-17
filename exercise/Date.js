let d = new Date();

d.getDate(); // 1부터 시작. 날짜를 출력한다
d.getMonth(); // 0부터 시작. +1을 해야한다
d.getDay(); // 0부터 시작. 0은 일요일

switch (d.getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  default:
    console.log("날짜의 양식이 잘못되었습니다.");
    break;
}

d.getHours();
d.getMinutes();
d.getSeconds();

d.getFullYear();
// d.getYear(); // 1900년도부터 연도 계산, 사용X

// 6월 표시하기 위해서는 -1. 달은 0부터 시작하기 때문
new Date(2023, 5, 30);
new Date(2023, 5, 30, 18);	// Fri Jun 30 2023 18:00:00 GMT+0900 (한국 표준시)

// 다음처럼 표현하면 가독성이 훨씬 좋다
// 달이 2가 아닌 1이 나온다
new Date("2023/1/20/10:00:00");	// Fri Jan 20 2023 10:00:00 GMT+0900 (한국 표준시)

/* ----------------------------------- */

const dayNames = ["(일요일)", "(월요일)", "(화요일)", "(수요일)", "(목요일)", "(금요일)", "(토요일)"];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? "PM" : "AM";

/* ----------------------------------- */

let today = new Date(); // today의 지정 로캘(locale)은 KST(Korea Standard Time)

// https://ko.wikipedia.org/wiki/%ED%98%91%EC%A0%95_%EC%84%B8%EA%B3%84%EC%8B%9C
// locale을 활용하면 언어권에 맞게 입력과 출력을 수정하지 않고도 사용하는 언어권에 맞는 날짜를 처리할 수 있다
// UTC(Universal Time Coordinated)와 today의 지정 로캘 KST와의 차이는 -9시간이다
// 쉬운 말로 협정 세계시와 내 컴퓨터 시간 차가 -9시간
today.getTimezoneOffset() / 60; // -9

let d2 = new Date("2023/1/20/10:00:00");
d2.toString();			// 'Fri Jan 20 2023 10:00:00 GMT+0900 (한국 표준시)'
d2.toTimeString();	// '10:00:00 GMT+0900 (한국 표준시)'

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
// 국제표준시 기준 형식으로 표현
d2.toISOString();																	// '2023-01-20T01:00:00.000Z'
d2.toISOString().slice(0, 10);										// '2023-01-20'
d2.toISOString().slice(0, 10).replace(/-/g, "");	// '20230120'

//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
d2.toLocaleString("ko-KR"); // '2023. 1. 20. 오전 10:00:00'
d2.toLocaleString("en-US"); // '1/20/2023, 10:00:00 AM'
d2.toLocaleString("ja-JP"); // '2023/1/20 10:00:00'

/* ----------------------------------- */

// 날짜의 차를 구하는 코드
// getTime은 1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간 (밀리 초)을 나타내는 숫자
function getDateDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffDate = Math.abs(date1.getTime() - date2.getTime());
  // 일 == 밀리세컨 * 초 * 분 * 시
  return diffDate / (1000 * 60 * 60 * 24);
}

// 6월 30일까지 얼마나 남았을까?
getDateDiff("2023-04-17", "2023-06-30");	// 74

// chatGPT에 물어본 결과
// 두 날짜의 차를 계산합니다.
function daysBetween(date1, date2) {
  // 밀리초 단위로 두 날짜의 차이를 계산합니다.
  const diff = Math.abs(date1.getTime() - date2.getTime());
  // 1일은 24시간 * 60분 * 60초 * 1000밀리초입니다.
  const oneDay = 24 * 60 * 60 * 1000;
  // 차이를 1일 밀리초로 나눕니다.
  return Math.floor(diff / oneDay);
}

// 예시
const date1 = new Date("2021-01-01");
const date2 = new Date("2021-01-05");
console.log(daysBetween(date1, date2)); // 4
