let answer = ~~(Math.random() * 100);
// 프로그래밍 언어에서 random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수학수식이다

let count = 0;

for (;;) {
  count += 1;

  let userInput = parseInt(window.prompt("값을 입력해주세요!"));
  if (answer > userInput) {
    window.alert("UP");
  } else if (answer < userInput) {
    window.alert("DOWN");
  } else if (Number.isNaN(userInput)) {
    window.alert("다시 입력하세요!");
  } else {
    window.alert("CORRECT!");
    break;
  }
}

console.log(`${count}번째만에 맞추셨습니다`);
