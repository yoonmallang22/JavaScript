/* ---- async/await 비동기 처리 직렬 ---- */
// async function message() {
//   let hello = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   });

//   let world = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("world");
//     }, 100);
//   });

//   console.log(`${hello} ${world}`);
// }

/* ---- Promise 비동기 처리 직렬 ---- */
// function message() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   }).then((result) => {
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(result + " world");
//       }, 100);
//     }).then((result) => {
//       console.log(result);
//     });
//   });
// }

/* ---- Promise 비동기 처리 병렬 ---- */
// function message() {
//   // 프로미스가 서로 의존하지 않는 경우
//   // 실무에서 각각 다른 API를 호출할 때
//   Promise.all([
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("hello");
//       }, 100);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("world");
//       }, 100);
//     }),
//   ]).then((resultArr) => {
//     console.log(`${resultArr[0]} ${resultArr[1]}`);
//   });
//   // .then(([hello, world]) => {
//   //   console.log(`${hello} ${world}`);
//   // });
// }

/* ---- async/await 비동기 처리 병렬 ---- */
async function message() {
  let [hello, world] = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("hello");
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("world");
      }, 100);
    }),
  ]);

  console.log(`${hello} ${world}`);
}

message();

console.log("I am sync!");
