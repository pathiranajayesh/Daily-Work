import './App.css'
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(0);

  // let count = 0;

  // const increment = ()=>{
  //   count +=1;
  // };

  // const decrement = ()=>{
  //   count -=1;
  // };

  const increment =()=>{
    setCount(count+1);
  };

  const decrement = ()=>{
    setCount(count-1);
  };

  return (
    <>
    <span className='title'>My Counter</span>
    <p className='subTitle'>The Count is {count}</p>
    <button onClick={increment} className='button'>+</button>
    <button onClick={decrement} className='button'>-</button>
    <div>
      
    </div>
    </>
  )
}

export default App;
