import {useState} from 'react';

// 3가지 Hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다. (조건문, 반복문 안에서 훅 호출 금지)
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

const HookExam = () => {

    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
        <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;