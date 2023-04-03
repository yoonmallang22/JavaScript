let n1 = 10000;
let n2 = 10.123123;
let n3 = 31;
let n4 = 1001;

console.log(parseInt(n1));			// 10000
console.log(parseInt(n2));			// 10		// 권장
console.log(~~(n2));						// 10 	// 코테 정도에서만 권장
console.log(parseInt(n3, 2));		// NaN	// 2진법으로 바꾸는 것이 아니라 
console.log(parseInt(n4, 2));		// 9		// 2진법으로 된 숫자를 10진법으로 바꾸는 것이다
console.log(parseInt(n4, 8));		// 513	// 8진법으로 된 숫자를 10진법으로 바꾸는 것이다
console.log(parseInt(n4, 10));	// 1001	// 10진법으로 된 숫자를 10진법으로 바꾸는 것이다

console.log(n2.toFixed(3));			// 10.123

/* ----------------------------------- */

console.log(Number(true));		// 1
console.log(Number(false));		// 0

console.log(parseInt(true));	// NaN
console.log(parseInt(false));	// NaN

/* ----------------------------------- */

console.log(Number(' '));			// 0
console.log(Number(''));			// 0
console.log(Number('hello'));	// NaN
console.log(Number('10 20'));	// NaN
console.log(Number('10abc'));	// NaN // parseInt()에서는 동작

// 텍스트가 숫자로 시작하지 않을 때 NaN
// 텍스트가 숫자로 시작했을 경우 숫자까지만 변환
// int는 정수, float는 실수
console.log(parseInt(' '));					// NaN
console.log(parseInt(''));					// NaN
console.log(parseInt('hello'));			// NaN
console.log(parseInt('hel10lo'));		// NaN
console.log(parseInt('10 20'));			// 10
console.log(parseInt('10abc'));			// 10
console.log(parseFloat('10.123'));	// 10.123

/* ----------------------------------- */

console.log(Number('    10'));			// 10
console.log(Number('10    '));			// 10
console.log(Number('     10    '));	// 10

console.log(parseInt('    10'));			// 10
console.log(parseInt('10    '));			// 10
console.log(parseInt('     10    '));	// 10

/* ----------------------------------- */

Infinity
Infinity > 100;
Infinity < 100;
-Infinity;

/* ----------------------------------- */

// Math
Math.abs(-10);		// 10	// 절대값
Math.ceil(10.3);	// 11 // 올림
Math.floor(10.3);	// 10	// 내림
Math.round(10.5);	// 11 // 반올림
Math.round(10.3);	// 10 // 반올림
Math.sqrt(100);		// 10	// square root, 루트

Math.PI	// 3.141592653589793
// 보다는 3.14를 사용한다

Math.min(1, 3, 4, 5, 6, 23);	// 1	
Math.max(1, 3, 4, 5, 6, 23);	// 23

Math.min([1, 3, 4, 5, 6, 23]);		// NaN
Math.min(...[1, 3, 4, 5, 6, 23]);	// 1	// ... (전개구문)

let values = [1, 2, 3, 4, 5]
let values2 = [6, 7, 8, 11, 10]
Math.max(...values);	// 5
Math.max(...values, ...values2);		// 11

Math.random();	// 0 이상 ~ 1 미만

// 1부터 10까지 난수 생성
parseInt(Math.random() * 10 + 1);

// math random 최솟값, 최댓값 지정
// Math.random() * (최대값 - 최솟값) + 최소값
// 120 ~ 150
Math.random() * (150 - 120) + 120;

Math.pow(2, 3);	// 8	// 2 ** 3

/* ----------------------------------- */

// 부동소수점
// 컴퓨터에서 10진수 연산은 정확하지 않다
// 결론은 0.1이 컴퓨터 입장에서 무한수다!
// 반복문 안에 0.1씩 증가하는 코드를 작성하게 된다면 예측 불가능한 값이 생성되는 것을 인지

// 0.1 + 0.2				// 0.30000000000000004
// 0.1 + 0.1 + 0.1	// 0.30000000000000004
// 0.1 * 3					// 0.30000000000000004
// 0.3 + 0.6				// 0.8999999999999999

// 문제가 되는 경우
let width = 0.3;
let height = 0.6;
if (width + height >= 0.9) {
console.log('실행해!')
}

/* ----------------------------------- */

// BigInt ***
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용한다
// BigInt를 여러분 회사에서 사용하지 않을 수도 있다(추가된지 3년)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

// 서비스는 항상 최악의 상황, 악성 유저에 대비해야 한다
// 정상 작동이 되지 않는 경우들이 있다

2 ** 53 - 1
// 9007199254740991

9007199254740991 + 1
// 9007199254740992

9007199254740991 + 2
// 9007199254740992

9007199254740991 + 3
// 9007199254740994

9007199254740991 + 4
// 9007199254740996

// 제대로 나오게 하려면 n을 붙이거나 BigInt()를 사용한다!
9007199254740991n + 1n
// 9007199254740992n

9007199254740991n + 2n
// 9007199254740993n

9007199254740991n + 3n
// 9007199254740994n

9007199254740991n + 4n
// 9007199254740995n

BigInt(9007199254740991) + BigInt(1)
// 9007199254740992n

BigInt(9007199254740991) + BigInt(2)
// 9007199254740993n

BigInt(9007199254740991) + BigInt(3)
// 9007199254740994n

BigInt(9007199254740991) + BigInt(4)
// 9007199254740995n

// 참고
// BigInt(5) + 5n		// 10n
// BigInt(5) + 5 		// error
// BigInt(5) / 2n 	// 2n (소수 표현 안됨)
// BigInt("10") + BigInt("10") // 큰 값을 정수로 입력받을 때에는 string으로 처리해서 받아야 한다

// MDN 설명
/*
	9007199254740991 이 숫자는 Number.MAX_SAFE_INTEGER와 동일 수 입니다. 말 그대로 안전한 숫자입니다.
	만약 BigInt 안의 숫자를 이 숫자보다 큰 숫자로 하였을 경우, 정확한 연산이 안됩니다.

	const x = Number.MAX_SAFE_INTEGER + 1;
	const y = Number.MAX_SAFE_INTEGER + 2;

	console.log(x === y);	// true

	분명히 다른 숫자를 더했는데 true가 나옵니다.

	'안전하지 않은 숫자'를 BigInt 안에 넣어보겠습니다.

	BigInt(9007199254740993) // 9007199254740992n
	BigInt(9007199254740995) // 9007199254740996n

	보시는 것처럼 제대로 표현하지 못하고 있습니다.

	하지만 BigInt 안에 이 숫자를 문자로 넣어주면
	BigInt("9007199254740993") // 9007199254740993n
	BigInt("9007199254740995") // 9007199254740995n

	위와 같이 제대로 표현합니다.

	그래서 BigInt로 큰 숫자를 표현하더라도, 그 안에 들어가는 값은 Number.MAX_SAFE_INTEGER 이하일 때만 안전하고 그 이상의 숫자를 넣으면 정확하게 결과값을 내어주지 않습니다. 따라서 BigInt()를 사용하여 더 큰 숫자를 표현하고 싶을 때에는 문자로 넣어주세요.
*/