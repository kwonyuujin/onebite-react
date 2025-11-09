const Viewer = ({count}) => { //객체의 구조분해할당으로 count를 props로 받음

    return <div>
        <div>현재 카운트: </div>
        <h1>{count}</h1>
    </div>
};

export default Viewer;