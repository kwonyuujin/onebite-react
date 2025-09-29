// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 -> 현재 날짜와 시간으로 생성
console.log(date1); // 현재 날짜와 시간 출력 -> Sun Sep 28 2025 19:25:19 GMT+0900 (한국 표준시)


let date2 = new Date("1997-01-07");
console.log(date2); // Tue Jan 07 1997 09:00:00 GMT+0900 (한국 표준시)

let date3 = new Date("1997/01/07/13:00:00");

// let date4 = new Date(1997,1,7,13,59,59); 

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1); // 1759055554178 (1970.01.01 00시 00분 00초로부터 현재까지의 ms)

let date4 = new Date(ts1);
console.log(date1, date4); // date1과 date4는 동일한 날짜와 시간

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 연도
let month = date1.getMonth() + 1; // 월 (0~11) -> 0이 1월, 11이 12월
let date = date1.getDate(); // 일 (1~31)

let hour = date1.getHours(); // 시 (0~23)
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds
); // 2025 9 28 19 36 21 출력

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 0~11 (2는 3월)
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1); // Thu Mar 30 2023 23:59:59 GMT+0900 (한국 표준시) (date1의 시간이 모두 2023-03-30 23:59:59로 변경됨)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Thu Mar 30 2023 (날짜 부분만 출력)
console.log(date1.toLocaleString()); // 2023. 3. 30. 오후 11:59:59 (로컬 시간 포맷으로 출력)

