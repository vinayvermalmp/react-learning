import React from 'react'

const heading = {
    fontSize: '60px',
    color: 'blue'

}

function Inline() {
  return (
    <div>
         <h1 class="error"> Error</h1>
              {/* <h1 className={styles.success}> Sucess</h1> */}
      <p style={heading}>Inline</p>
    </div>
  )
}

export default Inline
