// 스코프: 변수에 접근할 수 있는 유효범위
// 전역 스코프
// 함수 스코프
// 블록 스코프(ES6)

// let과 const는 블록레벨 스코프를 가지고 있다
{
  let x = 10;
  const y = 20;
}

console.log(x, y); // error

// 지역변수와 전역변수
let x = 100; // 블록 밖에 선언하면 전역에서 접근할 수 있는 변수가 된다. 전역 변수

function 함수() {
  let y = 20; // 블록 안에 변수를 선언하면 밖에서 접근할 수 없다. 지역변수
  console.log(x); // 스코프 체이닝(스코프 체인을 따라 해당 영역에 변수가 없으면 계속해서 상위 스코프를 따라 올라간다. 전역까지 올라갔는데도 변수가 없다면 에러가 난다.)
}

함수(); // 100

// 1
let x2 = 10;
function 함수1() {
  let x2 = 20;
  function 함수2() {
    function 함수3() {
      console.log(x2);
    }
  }
}

함수1(); // 함수2, 함수3 호출을 안했기 때문에 아무것도 안 나온다

// 2
let x3 = 10;
function 함수1() {
  let x3 = 20;
  function 함수2() {
    function 함수3() {
      let x3 = 30;
      console.log(x3);
    }
    함수3();
  }
  함수2();
}

함수1(); // 30

// 3
let x4 = 10;
function 함수1() {
  let x4 = 20;
  function 함수2() {
    function 함수3() {
      console.log(x4);
    }
    함수3();
  }
  함수2();
}

함수1(); // 20
console.log(x4); // 10

// 4
let aa = 10;
let bb = 10;

function 함수1() {
  let aa = 20;
  let bb = 20;
  function 함수2() {
    let aa = 30;
    console.log(aa, bb);
  }
  함수2();
}

함수1(); // 30 20
