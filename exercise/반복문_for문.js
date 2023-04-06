for (let i = 0; i < 10; i += 2) {
  // let을 생략하면 안된다. i가 전역으로 생성이 되어버린다.
  console.log(i);
}

// for 문의 구성요소들은 모두 선택적으로 사용할 수 있다
for (let i = 0; i < 10; ) {
  console.log(i);
  i += 1;
}

for (let i = 0; ; ) {
  console.log(i);
  i += 1;
  if (i >= 10) {
    break;
  }
}

let i = 0;
for (;;) {
  console.log(i);
  i += 1;
  if (i >= 10) {
    break;
  }
}

// 무한반복
// 무한반복은 메모리를 많이 잡아먹기 때문에 시스템 전체에 영향이 간다
// 1. 가능하면 반복의 시간을 정해주기
// 2. 탈출 조건을 명확히 해주기
for (;;) {
  let i = 0;
  console.log("실행하지 마세요.");
  i += 1;
  if (i >= 10) {
    break;
  }
}
