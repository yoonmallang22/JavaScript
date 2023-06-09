window.alert("hello"); // 브라우저에 메세지 다이얼로그를 띄운다

window.prompt("입력해!");
// 브라우저에 사용자의 데이터를 입력받을 수 있는 입력 창을 띄운다
// prompt는 입력값이 숫자여도 문자열로 받는다

window.confirm("확인"); // true 혹은 false 값을 반환하는 다이얼로그를 띄운다

console.log("10"); // 콘솔창에 로그 메세지를 보여준다
console.log(10);
console.log(true);
console.log("%chello world", "color:red;font-size:32px");
console.log(
  "%chello world%chello",
  "color:red;font-size:32px",
  "color:blue;font-size:16px"
);
// https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20

console.error(); // 콘솔창에 에러 메세지를 보여준다

let data = {
  a: 10,
  b: 20,
  c: 30,
};
let data2 = [10, 20, 30];
console.table(data); // 콘솔창에 데이터를 테이블 형태로 제공한다
console.table(data2);

console.dir(data); // 요소가 가지고 있는 모든 속성을 보여준다
console.dir(window);

console.info("hello"); // 자주 사용하지 않는다

console.warn("hello");
// 실행은 해주지만 경고 메세지를 보여준다
// 자주 사용하지 않는다

console.group("위니브"); // 자주 사용은 안되지만 한 번 사용할 때 중요하게 사용된다
console.group("경영지원");
console.log("대표/이호준");
console.group("비서팀");
console.log("비서팀장/자비스");
console.groupEnd();
console.log("COO/OOO");
console.log("CDO/OOO");
console.groupEnd();
console.group("개발");
console.log("개발리드/이OO");
console.log("FE/OOO");
console.log("FE/OOO");
console.log("BE/OOO");
console.log("BE/OOO");
console.log("Infra/OOO");
console.groupEnd();
console.group("디자인");
console.log("DE/OOO");
console.log("DE/OOO");
console.groupEnd();
console.groupEnd();
