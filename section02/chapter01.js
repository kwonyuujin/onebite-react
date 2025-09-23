// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;


// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들을 제외한 나머지 모든 값
let t1 = "hello"; //문자열
let t2 = 123; //숫자
let t3 = []; //객체
let t4 = {}; //숫자
let t5 = () => {};


// 3. 활용 사례

function printName (person) {
    if(!person){
        console.log("person의 값이 없음");
        return; // 함수 바로 종료 -> 아래 console.log(person.name)에 가기 전 종료됨 
        // -> 오류 발생 x
    }
    console.log(person.name);
}

let person;
printName(person);
