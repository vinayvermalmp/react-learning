import React, { useEffect, useState } from 'react'


//example - useEffect after render  
function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect updating the document')
        document.title = `you clicked ${count} times`
    }, [count])
  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count+1)}>Click {count} times </button>
    </div>
  )
}

export default HookCounterOne
