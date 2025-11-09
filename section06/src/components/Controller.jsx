const Controller = ({onClickButton}) => { // props로 onClickButton 받기
    return <div>
        <button onClick={() => {
            onClickButton(-1); // 화살표 함수를 통해 onClickButton 함수 호출하면서 -1 전달
        }}>-1</button>
        <button onClick={() => {
            onClickButton(-10); // onClickButton 함수 호출하면서 -10 전달
        }}>-10</button>
        <button onClick={() => {
            onClickButton(-100); // onClickButton 함수 호출하면서 -100 전달
        }}>-100</button>
        <button onClick={() => {
            onClickButton(100); // onClickButton 함수 호출하면서 +100 전달
        }}>+100</button>
        <button onClick={() => {
            onClickButton(10); // onClickButton 함수 호출하면서 +10 전달
        }}>+10</button>
        <button onClick={() => {
            onClickButton(1); // onClickButton 함수 호출하면서 +1 전달
        }}>+1</button>     
    </div>
};

export default Controller;