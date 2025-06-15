import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
   const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(prevCount => prevCount + 1)
            
        }
    }
  return (
    <div>
       <h1> {count}</h1>
      <button onClick={() => setCount(initialCount)} > reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)} > increment </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)} > Decrement</button>
      <button onClick={incrementFive} > increment 5</button>
    </div>
  )
}

export default HookCounterTwo
