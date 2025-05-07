import './App.css'
import { useState } from 'react';

type HelloMesage = {
  msg: string;
}

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(prevCount => prevCount + 1}>+</button>
    </>
  )
}

export default App
