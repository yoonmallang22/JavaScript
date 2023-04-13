// Map은 데이터를 추가하거나 제거하는 작업에서 Object보다 더 나은 성능을 보인다
let m = new Map();

// Map에 값을 넣기
m.set("하나", 1);
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

// Map의 값에 접근하기
console.log(m.get("하나"));

// Object의 키는 문자열 타입으로만 지정해야 하지만, Map의 키는 모든 값을 가질 수 있다
// {[1, 2, 3]: 100, {'하나':1}: 10} // error
m.set([1, 2, 3], '리얼리?');
console.log(m.get([1, 2, 3]));	// undefined	// 두 배열의 주소값이 다르기 때문

let x = [1, 2, 3, 4];
m.set(x, "리얼리?");
console.log(m.get(x));	// 리얼리?

// Map의 값이 있는지 확인하기
console.log(m.has("하나"));	// true

// Map의 값을 제거하기
m.delete("하나");
console.log(m.has("하나"));	// false
console.log(m);	// Map(5) {1 => '하나', true => 1, false => 0, Array(3) => '리얼리?', Array(4) => '리얼리?'}

// Map의 크기를 확인하기
// Object는 크기를 사용자가 직접 수동으로 알아내야 하지만, Map은 size를 통해 크기를 쉽게 얻을 수 있다
const obj = {하나: 1, 둘: 2};
console.log(obj.length); // undefined
console.log(obj.size); // undefined

console.log(m.size);	// 5

/* ----------------------------------- */

const data = new Map().set("name", "mallang").set("age", 23).set("height", 157);

console.log(data);	// Map(3) {'name' => 'mallang', 'age' => 23, 'height' => 157}

/* ----------------------------------- */

// 키 값의 중복이 안된다
let map = new Map();
map.set("윤말랑", 1);
map.set("윤말랑", 2);
map.set("윤말랑", 3);

console.log(map);	// Map(1) {'윤말랑' => 3}

/* ----------------------------------- */

let data2 = new Map([["one", 1], ["two", 2]]); // O
let data2 = new Map(Object.entries({ one: 1, two: 2 })); // O
let data2 = new Map({ one: 1, two: 2 }); // X
let data2 = new Map('hello world'); // X
let data2 = new Map([10, 20, 30, 40]); // X

/* ----------------------------------- */

// 직접 순회가 가능하지 않은 Object
let data3 = { one: 1, two: 2 };

for (const i of data3) {
  console.log(i);	// data3 is not iterable
}

for (const i of Object.entries(data3)) {
  console.log(i);
}
// ['one', 1]
// ['two', 2]

// 직접 순회가 가능한 Map
let mm = new Map();

mm.set("하나", 1) // 메서드 체이닝
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4);

for (const i of mm) {
  console.log(i);
}
// ['하나', 1]
// ['둘', 2]
// ['셋', 3]
// ['넷', 4]

for (const [key, value] of mm) {
  console.log(key, value);
}
// 하나 1
// 둘 2
// 셋 3
// 넷 4

// Object의 단점
let test = { one: 1, two: 2 };
Object.keys(test);	// ['one', 'two']

// map은 메서드로 모두 호출 가능!
console.log(mm.keys());
console.log(mm.values());
console.log(mm.entries());

// Map <-> Object 간의 형변환
let 맵 = new Map(Object.entries({ one: 1, two: 2 }));
let 오브젝트 = Object.fromEntries(맵);