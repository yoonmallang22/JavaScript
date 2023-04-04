const x = 10;
const y = 20;

console.log(`x값은 ${x}이고 y값은 ${y}이고 두 개를 곱한 값은 ${x * y}입니다.`);
// 템플릿 리터럴 중괄호 안에 연산을 넣는 것을 권하지 않는다

const x2 = 10;
const y2 = 20;
const result = x2 * y2; // 유지보수에 더 용이하다

console.log(`x값은 ${x2}이고 y값은 ${y2}이고 두 개를 곱한 값은 ${result}입니다.`);

// console.log('h
// e
// l
// l
// o');	// error

console.log(`h
e
l
l
o`);

// 예전에는 이렇게 작성했다
const x3 = "hello";
const y3 = "world";
const result2 = x3 + "\n" + y3;
console.log(result2);
// hello
// world

// 단점을 '굳이' 뽑자면 가독성이 떨어진다
if (true) {
  if (true) {
    if (true) {
      console.log(`h
e
l
l
o`);
    }
  }
}
/*
h
e
l
l
o
*/

if (true) {
  if (true) {
    if (true) {
      console.log(`h
			e
			l
			l
			o`);
    }
  }
}
/*
h
			e
			l
			l
			o
*/
