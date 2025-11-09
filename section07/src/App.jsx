import './App.css'
import Viewer from './components/viewer.jsx';
import Controller from './components/Controller.jsx';
import Even from './components/even.jsx';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return; // 첫 렌더링(마운트)일 때는 실행하지 않도록 함
    }
    console.log("update");
  }); // deps 생략, 업데이트가 될 때마다 계속 실행됨

  // 3. 언마운트 : 죽음

  const onClickButton = (value) => { 
    setCount(count + value); 
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => setInput(e.target.value)} />  
      </section>
      <section>
        <Viewer count={count} />  
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} /> 
      </section>
    </div>
  )
}

export default App
