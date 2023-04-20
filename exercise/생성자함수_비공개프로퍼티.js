// 클로저
function PersonGenerator() {
  let age = 25;

  function InnerPersonType() {}

  InnerPersonType.prototype.getAge = function () {
    return age;
  };
  // InnerPersonType.prototype.getAge = age;

  return InnerPersonType;
}

const Person = PersonGenerator();
const myPerson = new Person();
myPerson.getAge(); // 25

// IIFE(즉시실행함수)
const PersonGenerator2 = (function () {
  let age = 25;

  function InnerPersonType() {}

  InnerPersonType.prototype.getAge = function () {
    return age;
  };

  return InnerPersonType;
})();

const myPerson2 = new PersonGenerator2();
myPerson2.getAge(); // 25
