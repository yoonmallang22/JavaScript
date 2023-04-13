/* ---- object처럼 사용되는 함수의 특성 ---- */
function 함수1(a, b) {
  return a + b;
}

function 함수2(a, b, c) {
  return a + b + c;
}

function 함수3(a, b, c, d, e, f) {
  return a + b + c;
}

console.dir(함수1);
console.dir(함수2);
console.dir(함수3);
// length: 파라미터의 개수

// array, object, function이 모두 같은 방식으로 접근하거나 값을 변경할 수 있다!
함수["location"] = "jeju";
console.dir(함수); // 변경 O

함수["name"] = "jejufunction";
console.dir(함수); // 변경 X
// console.dir(jejufunction) // 호출 불가능

함수["length"] = 5;
console.dir(함수); // 변경 X

/* ---- 아규먼트가 순서대로 들어가는 함수의 특성 ---- */
function 함수(a = 10, b = 20, c = 30) {
  return a + b + c;
}

함수(); 																// 60
함수(100); 															// 150
함수(100, 200); 												// 330
함수(100, 200, 300); 										// 600
함수((c = 300)); 												// 330이 아니고 350. 순서대로 들어간다
함수((a = 100), (c = 300)); 						// 430
함수((a = 100), (b = 300), (c = 200));	// 순서가 뒤바뀌면 hell
함수((a = 100), (c = 200), (b = 300)); 	// 순서가 뒤바뀌면 hell

/* ---- roro 기법 ---- */
// 입력되는 아규먼트가 매우 많은 아래 함수의 경우 호출하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵고 읽기도 어렵다.
// 코드를 쭉 읽어 내려가다가 이 함수를 만났을 때..
window.addNewControl("Title", 20, 50, 100, 50, true);

// python 형식
window.addNewControl(
	(title = "Title"),
	(xPosition = 20),
	(yPosition = 50),
	(width = 100),
	(height = 50),
	(drawingNow = true));

// 사용방법
function 로그인정보({ 
	회원등급 = "Gold",
	글쓰기 = true,
	글읽기 = true,
	채널관리 = true,
	백업 = "일주일 이내 가능",
	소셜로그인여부 = true }) {
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
}

로그인정보({
  회원등급: "Silver",
  소셜로그인여부: false, // 순서까지 바뀌었다
  백업: "3일 이내 가능", // 중간에 생략된 값도 있고
});
// Silver true true true 3일 이내 가능 false

로그인정보(); // error
로그인정보({}); // Gold true true true 일주일 이내 가능 true

// 아규먼트 없이 호출 가능
function 함수({ a = 1, b = 2, c = 3 } = {}) {
  console.log(a, b, c);
  return a + b + c;
}

함수(); // 1 2 3	// 6
함수({}); // 1 2 3	// 6
함수({ b: 100 }); // 1 100 3	// 104

// 원리: 구조분해할당
let one;
let two;
let three;
let four = { one, two, three };
console.log(four);	// {one: undefined, two: undefined, three: undefined}
// 변수를 object 안에 넣으면 변수명이 key가되고 변수의 값이 object의 value가 된다

// 왼쪽 one, two, three는 변수
let { one, two, three } = { one: 10, two: 20, three: 30 };
let { one, two, three } = { two: 20, one: 10, three: 30 };

// 함수 정의에서 등호 사용하는 원리
let { one:10, two, three } = { two: 20, one: 10, three: 30 };	// error
let { one = 100, two, three } = { two: 20, three: 30 };

// 참고
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined	// error