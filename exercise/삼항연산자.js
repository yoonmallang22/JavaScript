const sale = true;
const price = sale ? 100 : 200;
console.log(price); // 100

const price2 = 7000;
const message = price2 >= 5000 ? "비싸요" : "저렴해요";
console.log(message); // 비싸요

const price3 = 7500;
const message2 = price3 >= 9000 ? "비싸요" : price3 >= 7000 ? "적절해요" : "저렴해요";
console.log(message2); // 적절해요
