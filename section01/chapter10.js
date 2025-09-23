for (let idx = 1; idx <= 10; idx++) {
    console.log(idx);
    if (idx >= 5){
        break;
    }
}

// 짝수일 때는 출력 안하고 넘어가기
for (let idx = 1; idx <= 10; idx++) {
    if (idx % 2 === 0){
        continue;
    }
    console.log(idx);
}