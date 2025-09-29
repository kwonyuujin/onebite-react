// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "이정환", hobby: "테니스"},
    {name: "김효빈", hobby: "테니스"},
    {name: "홍길동", hobby: "독서"},
];


const tennisPeople = arr1.filter((item) => item.hobby === "테니스"); // hobby가 "테니스"인 요소들만 필터링하여 새로운 배열로 반환

console.log(tennisPeople);
// [ { name: '이정환', hobby: '테니스' }, { name: '김효빈', hobby: '테니스' } ]



// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
})

console.log(mapResult1); // [2, 4, 6] (각 요소에 2를 곱한 값들로 이루어진 새로운 배열 반환)


// arr1 에서 name 속성값들만 뽑아서 새로운 배열로 반환
let names = arr1.map((item) => item.name);
console.log(names); // [ '이정환', '김효빈', '홍길동' ]


// 3. sort
// // 배열을 사전순으로 정렬하는 메서드
// let arr3 = ["b", "a", "c"];
// arr3.sort();
// console.log(arr3); // [ 'a', 'b', 'c' ] (사전순으로 정렬된 배열 반환)

// // 숫자 배열을 오름차순으로 정렬
// let arr3 = [10, 3, 5];
// arr3.sort((a, b) => {
//     if (a > b){
//         //b가 a 앞에 와라
//         return 1; // -> b, a 배치 (둘 중에 더 작은 값이 앞에 오게 됨) 
//     } else if(a < b){
//         // a가 b 앞에 와라
//         return -1; // -> a, b 배치
//     } else {
//         // 두 값이 같으면 두 값의 자리를 바꾸지 마라
//         return 0; // -> a, b 자리를 그대로 유지
//     }
// });

// console.log(arr3); // [ 3, 5, 10 ] (오름차순으로 정렬된 배열 반환)


// 숫자 배열을 내림차순으로 정렬
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
    if (a > b){
        //a가 b 앞에 와라
        return -1; // -> 둘 중에 더 큰 값이 앞에 오게 됨
    } else if(a < b){
        // b가 a 앞에 와라
        return 1; 
    } else {
        // 두 값이 같으면 두 값의 자리를 바꾸지 마라
        return 0; // -> a, b 자리를 그대로 유지
    }
});

console.log(arr3); // [ 10, 5, 3 ] (내림차순으로 정렬된 배열 반환)

// 4. toSorted 
// 정렬된 새로운 배열을 반환하는 메서드 (원본 배열은 변경되지 않음)
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted(); // 사전순으로 정렬된 새로운 배열 반환
console.log(sorted); // [ 'a', 'b', 'c' ]
console.log(arr5); // [ 'c', 'a', 'b' ] (원본 배열은 변경되지 않음)

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-");
console.log(joined); // hi-im-winterlood
// default 구분자는 쉼표(,) 이지만 원하는 구분자를 지정할 수도 있음