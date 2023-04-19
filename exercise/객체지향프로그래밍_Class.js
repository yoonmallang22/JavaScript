// 음식 이름의 배열을 전달하면 배열안에서 랜덤하게 메뉴를 뽑아내는 기능을 가진 로봇객체의 생성자를 만들어보세요. 예를들어 new FoodPicker(['짜장면', '청국장', '김치찌게']) 이렇게 인스턴스를 만들면 인스턴스는 짜장면, 청국장, 김치찌게 중에 한 가지 메뉴를 랜덤하게 콘솔로 출력하는 기능을 가져야합니다.

class FoodPicker {
  constructor(foodNames) {
    this.name = foodNames;
  }

  sayMenu() {
    console.log(`오늘의 메뉴는 ${this.name[Math.floor(Math.random() * this.name.length)]}입니다.`);
  }
}

let robot1 = new FoodPicker(["짜장면", "청국장", "김치찌개"]);
robot1.name;
robot1.sayMenu();

let robot2 = new FoodPicker(["짜장면", "청국장", "김치찌개"]);
robot2.name;
robot2.sayMenu();

robot1.sayMenu === robot2.sayMenu; // true
