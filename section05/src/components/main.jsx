// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다(조건문, 반복문 사용 x)
// 2. 숫자, 문자열, 배열 값만 정상적으로 렌더링 됨. (객체, true, null, undefined 등 제대로 렌더링 안됨)
// 3. 모든 태그는 닫혀 있어야 한다. (여는 태그가 있으면 닫는 태그도 함께 존재)
// 4. 최상위 태그는 반드시 하나여야만 한다.

import "./Main.css";

const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true,
    };

    if(user.isLogin) {
        return <div className = "logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }

    //return (
    //    <>
    //    {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //    </>
    //);
};

export default Main;