import React, { useState } from 'react'

const Counter = () => {
    const [state, setState] = useState("Allen West");

    function changeName(){
        setState("GoodGod Okorie");
    }

  return (
    <div>
        <h1>Counter App</h1>
        <p>{state}</p>
        <button onClick={changeName}>Change Name</button>
        <button>Increment</button>
        <button>Decreement</button>
    </div>
  )
}

export default Counter