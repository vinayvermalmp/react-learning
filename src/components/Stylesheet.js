import React from 'react'
import './style.css';

function Stylesheet(props) {
    const className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 class="primary"> Style Sheet</h1>
      <h1 className={`${className} font-xl`}> Style Sheet 2</h1>
    </div>
  )
}

export default Stylesheet
