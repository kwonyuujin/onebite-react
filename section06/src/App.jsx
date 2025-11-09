import './App.css'
import Viewer from './components/viewer.jsx';
import Controller from './components/Controller.jsx';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => { // 이벤트 핸들러 직접 만들어서 props로 넘기기(Controller.jsx)
    setCount(count + value); // 상태 업데이트
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />  
      </section>
      <section>
        <Controller onClickButton={onClickButton} /> 
      </section>
    </div>
  )
}

export default App
