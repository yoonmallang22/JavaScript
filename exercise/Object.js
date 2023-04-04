const human = {
  name: "mallang",
  age: 23,
  from: "Korea",
  askingHer() {
    console.log("hello world!");
  },
  0: "01050442903",
};

human.name; // mallang
human.age; // 23
human["name"]; // mallang
human["age"]; // 23
// human.0	//error // 그래서 arr.1 안되는 것이다
human["0"]; // '01050442903'
human[0]; // '01050442903'

human.job = "FrontEnd Developer";

delete human.age;

// 다른 언어와 동작방식이 다르다. 주의!
"age" in human; // true
20 in [10, 20, 30, 40]; // false
"length" in [10, 20, 30, 40]; // true

const aespa = {
  members: ["카리나", "윈터", "지젤", "닝닝"],
  from: "광야",
  sing: function () {
    return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!";
  },
};

aespa.hasOwnProperty("itzy"); // false
aespa.hasOwnProperty("sing"); // true

// 다른 언어는 aespa.keys()와 같은 방식으로 사용한다
console.log(Object.keys(aespa)); // ['members', 'from', 'sing']
console.log(Object.values(aespa)); // [["카리나", "윈터", "지젤", "닝닝"], '광야', ƒ]
