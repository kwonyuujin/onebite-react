// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 보통 리터럴 방식을 사용
// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name : "권유진",
    age : 27,
    hobby : "테니스",
    job : "FE Developer",
    extra : {},
    10 : 20, // 숫자도 키로 사용할 수 ㅇ
    "like cat" : true, //띄어쓰기의 경우는 "" 해주기

}

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호  표기법)
let name = person.name; //person 객체의 name 프로퍼티의 값("권유진")

let age = person["age"]; // 꼭 "" 해줘야 오류 안남
console.log(age); //27 출력


let property = "hobby";
let hobby = person[property]; //hobby 에 "테니스" 가 저장됨

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법 (delete)
delete person.job; // job 프로퍼티가 person 객체에서 삭제됨
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1); //true 반환 -> name이라는 프로퍼티가 person 객체에 있으니까

let result2 = "cat" in person;
console.log(result2); //false 반환 -> cat이라는 프로퍼티가 person 객체에 없으니까