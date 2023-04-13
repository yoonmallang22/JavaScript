// 1. 전역공간의 this는 window(node는 global) → 실제로는 window.globalThis, window.this 아니다 [자바스크립트에서 `globalThis`의 소름끼치는 폴리필](https://ui.toast.com/weekly-pick/ko_20190503)
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞의 객체
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있다

// 3.
function a() {
	console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
		// Window
  }
  b();
	// Window
}
a();
// Window

// 위 함수는 a.b.c() 이런 식으로 호출한 객체를 타고 올라가는 형태가 아니다

// 이름이 있는 함수 안에서 정의된 함수의 경우 this는 전역을 바라본다
// a 함수는 object 안에 있는 함수
const person = {
  name: "mallang",
  age: 23,
  a() {
    console.log(this);
    console.log(this.name);
    function b() {
      console.log(this);
      console.log(this.name);
      function c() {
        console.log(this);
        console.log(this.name);
      }
      c();
      // Window
      // 
    }
    b();
    // Window
    // 
  },
};
person.a();
// {name: 'mallang', age: 25, a: ƒ}
// mallang

// 4.
const person2 = {
  name: "mallang",
  age: 23,
  a() {
    console.log(this);
    console.log(this.name);
    let b = () => {
      console.log(this);
      console.log(this.name);
      let c = () => {
        console.log(this);
        console.log(this.name);
      };
      c();
			// {name: 'mallang', age: 25, a: ƒ}
			// mallang
    };
    b();
		// {name: 'mallang', age: 25, a: ƒ}
		// mallang
  },
};
person2.a();
// {name: 'mallang', age: 25, a: ƒ}
// mallang

let a = () => {
  console.log(this);
  console.log(this.name);
  let b = () => {
    console.log(this);
    console.log(this.name);
    let c = () => {
      console.log(this);
      console.log(this.name);
    };
    c();
		// Window
    // 
  };
  b();
	// Window
  // 
};
a();
// Window
// 

// 5.
function Book(책이름, 책가격, 저자, 출판일) {
  this.출력 = console.log(this);
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
}

let newBook = new Book("Javascript", 1000, "윤말랑", "2023.04.13");

// Book {}
//	저자:  "윤말랑"
//	책가격: 1000
//	책이름: "Javascript"
//	출력: undefined
//	출판일: "2023.04.13"

// 6.
[1, 2, 3].forEach(function () { console.log(this); });
// Window
// Window
// Window

// 메서드 콜백함수에서 this로 사용할 값을 제공할 수 있다
[1, 2, 3].forEach(function () { console.log(this); }, [10, 20, 30]);
// [10, 20, 30]
// [10, 20, 30]
// [10, 20, 30]

let 인세규정 = {
  책: 10,
  영상콘텐츠: 50,
};

function 인세계산함수책(e) {
  return e * (this.책 / 100);
}

function 인세계산함수영상(e) {
  return e * (this.영상콘텐츠 / 100);
}

console.log([100, 200, 300].map(인세계산함수책, 인세규정));	// [10, 20, 30]
console.log([100, 200, 300].map(인세계산함수영상, 인세규정));	// [50, 100, 150]
