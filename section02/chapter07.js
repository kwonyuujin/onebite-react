// 6가지 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5);

console.log(arr1); // [1, 2, 3, 4, 5]
console.log(newLength); // 5 (배열의 새로운 길이 반환)

// 2. pop
// 배열의 맨 뒤에 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); // 맨 뒤 요소인 3 제거 후 poppedItem에 반환

console.log(poppedItem); // 3
console.log(arr2); // [1, 2]

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // 맨 앞 요소인 1 제거 후 shiftedItem에 반환

console.log(shiftedItem, arr3); // 1  [2, 3]

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); // 배열 맨 앞에 0 추가, 새로운 길이(4) 반환
console.log(arr4); // [0, 1, 2, 3]
console.log(newLength2); // 4

// 5. splice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 배열의 중간에 요소를 추가, 제거하는 메서드

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 인덱스 2부터 4까지 잘라내기 (5는 포함 안됨)
let sliced2 = arr5.slice(2); // 인덱스 2부터 끝까지 잘라내기
let sliced3 = arr5.slice(-2); // 뒤에서부터 2개 잘라내기 [4, 5]
console.log(sliced); // [3, 4, 5] 
console.log(arr5); // [1, 2, 3, 4, 5] (원본 배열은 변경되지 않음)

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7); // arr6과 arr7을 이어 붙여서 새로운 배열 생성
console.log(concatedArr); // [1, 2, 3, 4] 


