import React from 'react'

function FunctionClick() {
 function clickHandler() {
       console.log("button clicked") 
  }
  return (
    <div>
      <button onClick={clickHandler}>button</button>
    </div>
  )
}

export default FunctionClick
