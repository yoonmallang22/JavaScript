// 자신과 같지 않다고 비교되는 유일한 값
console.log(NaN == NaN);	// false
console.log(NaN === NaN);	// false

// 현재 값이 NaN이거나 숫자로 변환했을 때 NaN이 되면 true를 반환
console.log(isNaN(undefined));	// true
console.log(isNaN(null));	// false
console.log(isNaN(NaN));	// true

// ES6에서 추가 도입
// 현재 값이 숫자형이고 NaN이면 true를 반환
console.log(Number.isNaN(undefined));	// false
console.log(Number.isNaN(null));	// false
console.log(Number.isNaN(NaN));	// true