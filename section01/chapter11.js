// 직사각형의 넓이를 구하는 함수
function getArea(width, height){
    function another () { // 함수 내부에 또 함수 가능
        console.log("another");
    }

    another();

    let area = width * height;

    return area; // 반환값 -> 함수 호출의 결과값, 함수 바로 종료됨
}

let area1 = getArea(10, 20); // area1 은 200
console.log(area1); 

let area2 = getArea(20, 30); 
console.log(area2); 