import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = ()  => {
    setCount(count + 1);
  };

  const decraeseCount = ()  => {
    setCount(count - 1);
  };

  const setZero = ()  => {
    setCount(0);
  };

  return (
    <div className="App">
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decraeseCount}>Decrease</button>
      <button onClick={setZero}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;