import React from 'react'

function Best(props) {
    let best = props.data
  return (
    <div>
      <ol>
      {  best.map((option,index)=><h1>{option.name}</h1>)}
      </ol>
    </div>
  )
}

export default Best
