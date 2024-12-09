import React, { useEffect, useState } from 'react';
import './App.css'
import { Button } from 'bootstrap';



function App() {
  const [count,setCount] = useState(0);

  //To Increment
  const increment = ()=>{
    setCount(count+1);
  };

  //To Decrement
  const decrement=()=>{
    setCount(count-1);
  };

  useEffect(()=>{
    //What I want to do as a side Effect(Mokkd wenne kiyala kiyanna ona methanadi)
    console.log(`New Count is :${count}`)
  },[count]//Dependency Array(Mokk diha balagenada ude {} athule theena de karanna ona kiyala liyanne methandi)



  )

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick = {increment}>+</button>
        <button onClick= {decrement}>-</button>

    </div>
  )

}

export default App