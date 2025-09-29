console.log(1);

setTimeout(()=>{    
    console.log(2);
}, 3000); // 3초가 지나면 콜백함수 실행됨 3000ms = 3s

console.log(3);
// 1 출력 -> 3 출력 -> 3초 후에 2 출력


// 비동기 처리 (Asynchronous Processing)
// - setTimeout() : 일정 시간이 지난 후에 특정 작업을 수행할 수 있도록 예약하는 함수
// - setInterval() : 일정한 시간 간격으로 특정 작업을 반복 수행할 수 있도록 예약하는 함수
// - fetch() : 네트워크를 통해 리소스를 비동기적으로 가져올 때 사용하는 함수
