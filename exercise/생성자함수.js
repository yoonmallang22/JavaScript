let book = {
  책이름: "JavaScript",
  책가격: 10000,
  저자: "윤말랑",
  출판일: "2023.04.12",
};

let newBook = {};
newBook["책이름"] = "Javascript";
newBook["책가격"] = 10000;
newBook["저자"] = "윤말랑";
newBook["출판일"] = "2023.04.12";

console.log(newBook);

function Book(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
}

let newBook2 = Book("Javascript", 10000, "윤말랑", "2023.04.12");
console.log(newBook2); // undefined(반환값) // return 값이 없기 때문

let newBook3 = new Book("Javascript", 10000, "윤말랑", "2023.04.12");
console.log(newBook3);	// Book {책이름: 'Javascript', 책가격: 1000, 저자: '홍길동', 출판일: '2023.04.12'}

/* 
new 키워드를 사용했을 때의 동작
function Book(책이름, 책가격, 저자, 출판일) {
  this = {};
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
  return this;
}
*/
