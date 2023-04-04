/* ---- 함수를 사용하는 이유 ---- */
// 1. 재사용성이 높아진다
function one() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello");
}
one();
one();
one();
one();

// 2. 유지보수가 용이합니다.
// 땅파기() // 10만줄
// 기반다지기() // 10만줄
// 기둥세우기() // 10만줄
// 벽돌쌓기() // 10만줄
// 지붕올리기() // 10만줄

// 기반다지기를 수정하려고 할 때 땅파기는 보지 않아도 되기 때문

// 3. 구조 파악이 용이합니다.
// 신입사원이 들어와도 파악하기 쉬움

/* ---- 함수 선언 방법 ---- */
// 함수 선언문
// 파선아실
function one(a, b) {
  let z = a + b;
  return z ** 2;
}

one(7, 3); // 100
one(7, 3); // 100

// 이름 없이 선언하는 함수
// 함수 표현식
const two = function (a, b) {
  let z = a + b;
  return z ** 2;
};

two(7, 3); // 100
two(7, 3); // 100

// 화살표 함수
// https://ko.javascript.info/arrow-functions-basics
const three = (a, b) => (a + b) ** 2;

three(7, 3); // 100
three(7, 3); // 100

// 만약 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있다
let 함수 = x => {
  return x + 10;
};

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 된다
let 함수2 = x => x + 10;

let 결과 = 함수2(2);

console.log(결과);	// 12

// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function four(a, b, c) {
  let z = c(a, b) + c(a, b);
  return z * 2;
}

four(7, 3, one); // 400

// 즉시 실행 함수
(function () {
  console.log("이 함수는 만들어지자마자 바로 실행됩니다!");
})();

/* ---- return과 console.log ---- */
function hello(para) {
  console.log(para);
  console.log(hello);
  return 100;
}
hello(10);
// 10
// f
// 100

let x = console.log("hello"); // hello
x; // undefined

// 함수, 메서드(클래스 안에 들어간 함수)
// .을 찍어 접근할 수 있는 함수다? -> 메서드
// 함수를 호출할 수 있는 이름은 결국 변수다
let xx = console.log;
xx("hello");

// 아래 3개는 같은 코드
function hello1() {
  console.log("hello");
}
function hello2() {
  console.log("hello");
  return;
}
function hello3() {
  console.log("hello");
  return undefined;
}
let a = hello1(); // hello
let b = hello2(); // hello
let c = hello3(); // hello

a; // undefined
b; // undefined
c; // undefined

function hello4() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  console.log("hello");
  console.log("hello");
  console.log("hello");
}
hello4(); // return문을 만나면 함수가 종료된다

function hello5() {
  if (true) {
    if (false) {
      if (true) {
        return;
      }
    }
  }
  console.log("hello");
}

function hello6() {
  if (true) {
    if (true) {
      if (true) {
        return;
      }
    }
  }
  console.log("hello");
}

// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료되는 것은 아니다
const xxx = [10, 20, 30, 40];
xxx.forEach((el) => {
  console.log(el);
  return;
  console.log("world");
});

/* ---- 아규먼트 ---- */
function 함수1(a, b, c) {
  return a + b + c;
}

함수1(10, 20, 30, 40); // 60	// error가 발생하지 않는다. 다른 언어는 error가 발생한다.

함수1(10, 20); // NaN	// error가 발생하지 않는다

function 함수2(a = 10, b = 20, c = 30) {
  return a + b + c;
}

함수2(1, 1); // 32

// a와 c가 아닌 a와 b에 들어간다
함수2((a = 1), (c = 1)); // 32

// 아래와 같은 식별이슈가 있을 경우 object로 넘긴다. roro 기법
function runPython(user, time, code, lv) {}
// 코드 1000줄
runPython("yoonmallang", 100, "function...", 3);

function runPython2({ user, time, code, lv }) {}
runPython2({
  user: "yoonmallang",
  time: 100,
  code: "function...",
  lv: 3,
});

// 기본값 설정
function runPython({ 
	user = "", 
	time = 0, 
	code = "", 
	lv = 0 }) {
	}
