function funcA(){
    console.log("funcA");
}

let varA = funcA; // funcA()가 아니라 함수 자체를 그냥 varA에다가 넣음
// 함수를 변수에다가 담아놓음
console.log(varA); // 함수 코드 자체가 출력이 됨

varA(); // 이제 이렇게도 쓸 수 있음!


//값으로써 함수 생성
let varB = function () { // 익명함수(이름이 없음)
    console.log("funcB");
};

varB();


// 2. 화살표 함수
let varC = (value) =>{
    console.log(value);
    return value + 1;
} 
   

console.log(varC(10)); //11출력