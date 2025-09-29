// const promise = new Promise((resolve, reject) => { //execuotor 함수 -> 2가지의 매개변수 전달(resolve, reject)
//     // 비동기 작업을 실행하는 함수
//     // executor: promise가 생성되는 순간에 자동으로 콜백함수를 호출 -> 비동기 작업을 실행 


//     setTimeout(() => {
//         console.log("안녕");
//         resolve(); // 작업이 성공했을 때 호출
//     }, 2000);
// });

// setTimeout(() => {
//     console.log(promise);}, 3000); // Promise { <pending> } -> 3초 후에 출력됨

// const promise = new Promise((resolve, reject) => { //execuotor 함수 -> 2가지의 매개변수 전달(resolve, reject)
//     // resolve : 비동기 작업이 성공했을 때 호출하는 함수
//     // reject : 비동기 작업이 실패했을 때 호출하는 함수

//     setTimeout(() => {
//         console.log("안녕");
//         resolve("안녕"); // 작업이 성공했을 때 호출 -> 2초 후에 "안녕" 출력 후에 resolve 함수 호출 -> promise의 상태가 "pending" -> "fulfilled"로 변경
//     }, 2000);
// });

// setTimeout(() => {
//     console.log(promise);
// }, 3000); // Promise { <fulfilled> } -> 3초 후에 출력됨 (2초 후에 "안녕" 출력 후에 promise의 상태가 "fulfilled"로 변경됨)
// // PromiseResult: "안녕" -> promise의 상태가 "fulfilled"로 변경될 때 전달한 값


// const promise = new Promise((resolve, reject) => { 
//     // reject : 비동기 작업이 실패했을 때 호출하는 함수

//     setTimeout(() => {
//         console.log("안녕");
//         reject("왜 실패했는지 이유..."); // promiseState: "rejected", promiseResult: "왜 실패했는지 이유..."
//     }, 2000);
// });

// setTimeout(() => {
//     console.log(promise);
// }, 3000); // Promise { <rejected> } -> 3초 후에 출력됨 (2초 후에 "안녕" 출력 후에 promise의 상태가 "rejected"로 변경됨)


// const promise = new Promise((resolve, reject) => { 
//     // reject : 비동기 작업이 실패했을 때 호출하는 함수

//     setTimeout(() => {
//         const num = 10;
//         if(typeof num === "number"){
//             resolve(num + 10); // promiseState: "fulfilled", promiseResult: 20  (성공 후 결과값 20)
//         } else {
//             reject("num이 숫자가 아닙니다.");
//         }    
//     }, 2000);
// });

// // then 메서드
// // -> 그 후에

// // promise 체이닝
// promise.then((value) => { // promiseState: "fulfilled"일 때 호출되는 콜백함수
//     console.log(value);
// }).catch((error) => { // promiseState: "rejected"일 때 호출되는 콜백함수
//     console.log(error);
// });



function add10(num){
    const promise = new Promise((resolve, reject) => { 
    
        setTimeout(() => {

            if(typeof num === "number"){
                resolve(num + 10); // promiseState: "fulfilled", promiseResult: 20  (성공 후 결과값 20)
            } else {
                reject("num이 숫자가 아닙니다.");
            }    
        }, 2000);
    });

    return promise; 
}

add10(0)
    .then((result) => {       
    console.log(result); // 10출력
    return add10(result);

}).then((result) => {
        console.log(result); // 20출력
        return add10(result)
}).then((result) => {
        console.log(result);
}).catch((error)=> {
    console.log(error);
});
// 콜백함수 안에서 계속 콜백함수를 호출하는 형태 -> 콜백 지옥(callback hell)
// 콜백지옥을 방지하기 위해 새로운 promise 객체를 반환