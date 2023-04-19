/* ---- 객체 리터럴 ---- */
const me = {
  name: "윤말랑",
  age: 23,
  address: "서울시 관악구 참숯 1길 19",
  phoneNum: "010-5121-6200",
  sleeping: function () {
    console.log("잔다.");
  },
  studying: function (project) {
    console.log("프론트엔드를 공부한다.");
    project.done();
  },
};

const project = {
  num: 0,
  done: function () {
    this.num++;
    console.log(`프로젝트 ${this.num}개 완료`);
  },
};

me.studying(project);

/* ---- 생성자 함수 ---- */
function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.sleeping = function () {
  console.log("잔다.");
};

Student.prototype.studying = function (project) {
  console.log("프론트엔드를 공부한다.");
  project.done();
};

/* ---- class ---- */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleeping() {
    console.log("잔다.");
  }

  studying(project) {
    console.log("프론트엔드를 공부한다.");
    project.done();
  }
}
