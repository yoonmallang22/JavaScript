// this가 어려운 이유는
// this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문이다
// bind를 포함한 예외사항이 있기 때문이다

function a() {
  console.log(this);
}

a(); 				// Window 호출
window.a();	// Window 호출

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

myObj.func1(); //myObj 호출

let test = myObj.func1;
test(); // Window 호출

/* ----------------------------------- */

function sayName() {
  console.log(this);
}

var c = {
  hello: "world",
  say: sayName,
};

var b = {
  c: c,
};
// var b = {c}와 동일

var a = {
  b: b,
};
// var a = {a}와 동일

sayName();		// Window 호출
c.say();			// c 호출
b.c.say();		// c 호출
a.b.c.say();	// c 호출

/* ----------------------------------- */

function sayName() {
  console.log(this);
}

var c = {
  hello: "world",
  say: sayName,
};

var b = {
  c: c,
  say: sayName,
};

var a = {
  b: b,
  say: sayName,
};

a.b.say();		// b 호출
a.say();			// a 호출
c.say();			// c 호출
a.b.c.say();	// c 호출

/* ----------------------------------- */

var name = "mallang";

function sayName() {
  console.log(this.name);
}

let peter = {
  name: "Peter Parker",
  say: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  say: sayName,
};

sayName();		// mallang
peter.say();	// Peter Parker
bruce.say();	// Bruce Wayne

/* ----------------------------------- */

function attackBeam() {	// 레이저 공격
  this.hp -= 20;
}

function attackKnife() {	// 칼 공격
	if (this.name === "thanos") {
    // 나를 호출한 애한테 각각 다르게 동작을 주고 싶을 때 this를 사용하면 된다
    this.hp -= 1;
    return;
  }
  this.hp -= 5;
}

let zombie = {
  name: "zombie",
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: "thanos",
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 100,
};

zombie.damaged1();
zombie.damaged2();
console.log(zombie);	// {name: 'zombie', hp: 9975, power: 2, damaged1: ƒ, damaged2: ƒ}
thanos.damaged2();
console.log(thanos);	// {name: 'thanos', hp: 9999, power: 100, damaged: ƒ}

/* ----------------------------------- */

// 사용예시
let 호텔 = [
  {
    이름: "하나호텔",
    위치: "제주도 제주시 001",
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "둘호텔",
    위치: "제주도 제주시 002",
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "셋호텔",
    위치: "제주도 제주시 003",
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());