// case 1
let me = { age: 30 }; // 객체에 대한 참조카운트 : 1
let you = me; 				// 객체에 대한 참조카운트 : 2

me = null;	// 객체에 대한 참조카운트 : 1
you = null;	// 객체에 대한 참조카운트 : 0, 가비지 컬렉터의 대상이 됨

// case 2
let x = {
  y: {
    z: 1,
  },
};

// x가 참조하는 객체 obj1, y가 참조하는 객체 obj2

let a = x;	// obj1 참조카운트: 2(x, a)
x = 1; 			// obj1 참조카운트: 1(a)

let b = a.y;	// obj2 참조카운트: 2(a.y, b)
a = 2;				// obj1 참조카운트: 0, obj2 참조카운트: 1(b)

// b가 obj2를 참조하기 때문에 obj1 객체는 제거되지 않는다
// obj1 객체는 사용하진 않지만 불필요하게 남아있는 것이다
// 이러한 상황을 메모리 누수라고 한다

// case 3: 클로저 메모리 누수
function outer() {
  let privateVal = ["test"];

  function getPrivate() {
    return privateVal;
  }

  return getPrivate;
}

const getPrivate = outer();
let secretVal = getPrivate();

console.log(secretVal);

secretVal = null;	// 해주지 않으면 영원히 존재한다
