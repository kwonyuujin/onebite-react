// 1. 배열 생성
let arrA = new Array() // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [ // 어떤 타입이던 다 넣을 수 ㅇ, 길이의 한계도 x
    1,
    2, 
    3,
    true, 
    "hello",
    null, 
    undefined, 
    () => {}, // 화살표 함수
    {}, // 객체
    [], // 배열
];
console.log(arrC);

// 2. 배열 요소 접근 (인덱스)
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2);

arrC[0] = "hello";
