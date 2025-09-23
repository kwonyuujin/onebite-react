// 1. 변수
let age = 27; // 변수 선언 후 초기화


// 2. 상수 -> 한 번 지정하면 바꿀 수 x (상수는 선언과 동시에 초기화가 필수)
const birth = "1997.01.07";


// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 x
let $_name;
// let #name; // 불가능


// 3-2. 숫자로 시작할 수 없다.
let name1; //가능
// let 2name; //불가능
let _2name;


// 3-3. 예약어를 사용할 수 없다. (let, const, if 등)
// let if; // 불가능

// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b;
//보다는
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
// 이게 더 무엇을 뜻하는 변수인지 직관적으로 알 수 있음 

