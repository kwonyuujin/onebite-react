// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];


arr1.forEach(function(item, idx, arr) { // 콜백함수 3번 반복
    console.log(idx, item * 2);
});


let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // true

console.log(isInclude); // true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 1 (2의 인덱스는 1)
console.log(index); // 1
// 만약 찾는 요소가 배열에 여러개 존재한다면 제일 처음 나오는 요소의 인덱스만 반환
// 만약 찾는 요소가 배열에 없다면 -1 반환

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 요소의 인덱스를 반환
// 특정 요소의 인덱스(위치)를 반환하는 메서드

// let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//     if (item === 2) return true; // 가장 처으로 true를 반환하는 요소의 인덱스를 반환
// }); // 1 (2의 인덱스 반환)

// console.log(findedIndex)


let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999); // -1 (999는 없으므로 -1 반환)     

console.log(findedIndex) // -1


let objectArr = [
    {name: "이정환"},
    {name: "홍길동"},
];

console.log(indexOf({name: "홍길동"})); // -1 (객체는 참조형이기 때문에, 같은 속성, 값이라도 다른 객체로 인식) 얕은비교만 가능
console.log(
    objectArr.findIndex(
        (item) => item.name === "홍길동"
    )
); // 1 (findIndex는 콜백함수를 통해 조건을 지정할 수 있기 때문에, 객체 탐색에 유리

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 그 요소를 그대로 반환
let arr5 = [
    {name: "이정환"},
    {name: "홍길동"},
];

const finded = arr5.find(
    (item) => item.name === "이정환"
); // {name: "이정환"}

console.log(finded); // {name: "이정환"}
