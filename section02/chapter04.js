// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]; // ... -> Spread 연산자
// console.log(arr2); // [4, 1, 2, 3, 5, 6] 출력


// Spread 연산자 활용 - 객체
let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1, // obj1의 키와 값을 모두 복사
    c: 3,
    d: 4,
};
// console.log(obj2); // {a:1, b:2, c:3, d:4} 출력


function funcA(p1, p2, p3) {
    console.log(p1, p2, p3); // 1 2 3 출력
}

funcA(...arr1); // funcA(1, 2, 3) 과 동일한 효과

// 2. Rest 매개변수
// -> Rest : 나머지, 나머지 매개변수

function funcB(...rest) { // ...rest -> Rest 매개변수 -> 한방에 모든 매개변수들을 다 받아올 수 ㅇ
    console.log(rest); // [1, 2, 3] 출력 (배열형태로 인수들이 저장됨)
}

funcB(...arr1); // 여러개의 인수 전달

