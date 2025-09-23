// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;


let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // not a number -> 수치연산 실패시 결과값으로 사용

// 2. String Type
let myName = "권유진"; // 문자열 사용시 작은따옴표, 큰따옴표 사용
let myLocation = "목동";
let introduce = myName + myLocation;


let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; //백틱 사용 -> // 템플릿 리터럴 문법


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type (아무것도 없다)
let empty = null; // 개발자가 명시적으로 직접 변수에 null을 할당 해줘야 됨


// 5. Undefined Type (변수 선언 후 초기화가 없어서 자동으로 할당되는 값)
let none; // 초기화값 없이 변수를 선언 후 출력 -> undefined 출력
console.log(none); 
