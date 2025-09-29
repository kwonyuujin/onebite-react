// function add(a, b, callback){
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum); // 비동기처리의 결과값을 콜백함수에 전달
//     }, 3000);
// }

// add(1, 2, (value) => { // 비동기 처리의 결과값을 사용하는 콜백함수를 함께 전달 
//     console.log(value);  // 3
// });


// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food); // 비동기처리의 결과값
    }, 3000);
}

function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback){
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
};

orderFood((food) => {
    console.log(food); // 떡볶이

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood); // 식은 떡볶이

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood); // 냉동된 식은 떡볶이
            // 콜백 지옥(callback hell)
        });
    });
});


// 이거 다시하기