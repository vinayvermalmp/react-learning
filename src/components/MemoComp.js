import React from 'react'

function MemoComp({name}) {
    console.log('Memo compo rendering')
  return (
    <div>
      {name}
    </div>
  )
}

export default  React.memo(MemoComp);
