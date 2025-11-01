const Button = ({children, text, color = "black"}) => {
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }
    return (
    <button 
        onClick ={onClickButton}
        // onMouseEnter={onClickButton} //마우스 올리면 로그에 text 출력
        style={{ color: color }}
    >
        {text} - {color.toUpperCase()}
        {children}
    </button>
    );
};


export default Button;

//구조분해 할당 props받아와서 기본값 설정