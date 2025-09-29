// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드
// 프로미스가 아닌 값을 반환하더라도 자동으로 프로미스로 감싸서 반환

async function getData(){
    return new Promise((resolve, reject)=>{ // 애초에 promise 객체 -> async 함수가 별다른 일을 하지 않음 그대로 반환
        setTimeout(() => {
            resolve({
                name: "이정환", 
                id: "winterlood",
            });
        }, 1500);
    });
}

console.log(getData()); 

// await
// async 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData(){
    const data = await getData(); // getData 함수가 처리되기를 기다림 -> getData 함수가 프로미스를 반환하므로 프로미스가 처리될 때까지 기다림
    console.log(data); // {name: "이정환", id: "winterlood"}
}

printData();