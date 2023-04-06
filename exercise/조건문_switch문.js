// switch문 작성할 때 팁
// 여러 줄 복사: option + shift + 위아래
// 자동 정렬 cmd + a, cmd + k + f

switch (new Date().getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  // default는 견고한 코드를 위해 써주는게 좋다
}

// 다른 언어에서 switch문 어떻게 사용할까? (python은 switch문 없음)
const 요일 = new Date().getDay();
const 요일객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};
console.log(요일객체[요일]);

const 요일2 = 10;
const 요일객체2 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};
console.log(요일객체2[요일2]); // undefined, 다른 언어에서는 에러

// default 처리는
// nullish 연산자 사용
console.log(요일객체2[요일2] ?? "없는 요일"); // 없는 요일
// 단락평가 사용
console.log(요일객체2[요일2] || "없는 요일"); // 없는 요일
