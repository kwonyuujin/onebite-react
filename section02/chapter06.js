// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1 2 3
};

let arr2 = [4, 5, 6, 7, 8];
for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]); // 4 5 6 7 8
};

// 1.2 for of 반복문
for(let item of arr){
    console.log(item); // 1 2 3 
}

// 2. 객체 순회
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
}

// 2.1 Object.keys 사용
// -> 주어진 객체에서 키 값들만 뽑아 새로운 배열로 반환

let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'hobby'] 배열 반환

for(let i = 0; i < keys.length; i++){
    console.log(keys[i]); // name age hobby
};

for(let key of keys){
    console.log(key); // name age hobby
}

for(let key of keys){
    const value = person[key];
    console.log(key, value); // name 이정환 age 27 hobby 테니스
}

// 2.2 Object.values 
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values); // ['이정환', 27, '테니스']

for(let value of values){
    console.log(value); // 이정환 27 테니스
}

// 2.3 for in 
for(let key in person){
    const value = person[key];
    console.log(key, value); // name 이정환 age 27 hobby 테니스
}