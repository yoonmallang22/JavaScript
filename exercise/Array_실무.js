/* ---- push() ---- */
let tableBodyData = [];
for (const iterator of data) {
  tableBodyData.push(`
		<tr>
				<td>${iterator["a"]}</td>
				<td>${iterator["b"]}</td>
				<td>${iterator["c"]}</td>
				<td>${iterator["d"]}</td>
				<td>${iterator["e"]}</td>
				<td>${iterator["f"]}</td>
		</tr>
	`);
}
document.querySelector("#dataTable > tbody").innerHTML = tableBodyData.join("");

/* ---- pop() ---- */
const tip1 = [1, 2, 3, 4, 5];
// 원본 수정 없이 5를 얻어내고 싶을 때
console.log([...tip1].pop()); // 5
// 원본 수정 없이 [1, 2, 3, 4]와 5를 얻어내고 싶을 때
const tip2 = [...tip1];
console.log(tip2.pop()); // 5
console.log(tip2); // [1, 2, 3, 4]

const tip3 = [1, 2, 3, 4, 5];
const tip4 = [10, 20, 30, 40, 50];
console.log([...tip3, 1000, ...tip4]); // [1, 2, 3, 4, 5, 1000, 10, 20, 30, 40, 50]

/* ---- flat() ---- */
const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat()); // 9

const tip6 = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
];
tip6.flat(); // [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]]
tip6.flat(1); // [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]]
tip6.flat(2); // [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
tip6.flat(Infinity); // 다 펼쳐지면 스톱한다	// [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]

/* ---- Array 만들기 ---- */
const tip7 = new Array(10).fill(0); // Array(10).fill(0)도 된다
const tip8 = Array.from("hello world"); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
".".repeat(100).split("."); // 권장하지 않는다

/* ---- slice() ---- */
const tip9 = [1, 2, 3, 4, 5];
[tip9.slice(0, 2), 1000, tip9.slice(2, 5)]; // [[1, 2], 1000, [3, 4, 5]]
[...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]; // [1, 2, 1000, 3, 4, 5]

/* ---- splice() ---- */
const tip10 = [1, 2, 3, 4, 5];
console.log(tip10.splice(2, 0, 1000));
tip10; // [1, 2, 1000, 3, 4, 5]

/* ---- map() ---- */
const tip11 = Array(100)
  .fill(0)
  .map((v, i) => i + 1);

const tip12 = [
  {
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    eyeColor: "green",
    name: "Annette Middleton",
    gender: "female",
    company: "KINETICA",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    eyeColor: "green",
    name: "Kidd Roman",
    gender: "male",
    company: "AUSTECH",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    eyeColor: "brown",
    name: "Best Ratliff",
    gender: "male",
    company: "PRISMATIC",
  },
];

const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
  return item.age;
});

/* ---- sort() ---- */
// 실무 사용 코드
function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0));
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0));
  }
}
