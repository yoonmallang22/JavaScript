let start = Date.now();

const result = (x) => {
  console.log(`${x}가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
};

// const blocking = () => {
//   let i = 0;
//   while (i < 99999999) {
//     i++;
//   }
//   return "blocking finished";
// };

const asyncBlocking = () => {
  return new Promise((resolve) => {
    let i = 0;
    while (i < 99999999) {
      i++;
    }
    resolve("blocking finished");
  });
};

result("동기식 코드1");

setTimeout(() => {
  result("setTimeout finished");
}, 0);

// result(blocking());

// 프로미스 객체를 만드는 과정은 동기적으로 진행된다
// result(asyncBlocking());

// then 메서드는 비동기적으로 실행된다
result(
  asyncBlocking().then((txt) => {
    result(txt);
  })
);

result("동기식 코드2");
