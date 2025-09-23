// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; //4번째 원소가 없는 경우에는 기본값 4 출력
// console.log(one, two, three, four); // 1 2 3 4 출력

// 2. 객체의 구조 분해 할당
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
};

let {
    age : myAge, // age라는 키의 값을 myAge라는 변수에 담기
    hobby,
    name,
    extra = "hello", // person.extra가 없으면 기본값 hello
} = person;

// console.log(name, myAge, hobby, extra); // 이정환 27 테니스 hello 출력 

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra);
}

func(person); // person이라는 객체를 넘겼기 때문에 구조 분해 할당이 가능

