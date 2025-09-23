// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};

// animal = {a:1}; // 오류 발생 -> 상수인 animal에 또 다른 객체를 생성할 수 x
// 이미 animal 객체가 const로 선언이 되어 있음 -> 딴거로는 못바꿔

//근데 객체 안 프로퍼티를 수정 / 변경할 수는 ㅇ
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "권유진",
    // 메서드
    sayHi () {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();