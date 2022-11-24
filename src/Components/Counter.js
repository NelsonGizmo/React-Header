import React, { useState } from 'react'

const Counter = () => {
    const [state, setState] = useState("Allen West");
    const [count, setCount] = useState(0);

    function changeName(){
        setState("GoodGod Okorie");
    }

    function increaseValue(){
        setCount(count + 1);
    }

    function decreaseValue(){
        setCount(count - 1);
    }
    

  return (
    <div>
        <h1>Counter App</h1>
        <p>{state}</p>
        <button onClick={changeName}>Change Name</button>
        
        <h1>{count}</h1>
        <button onClick={increaseValue}>Increment</button>
        <button onClick={decreaseValue}>Decreement</button>
    </div>
  )
}

export default Counter