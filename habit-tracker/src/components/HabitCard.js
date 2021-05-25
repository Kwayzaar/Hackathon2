import React from 'react'

function HabitCard( props ) {

  const handleClick = () => {
    props.habitClicked(props)
  }


  return (
    <div>
      <h3> { props.name } </h3>
      <ul>
        <li>Do Count: { props.doCount }</li>
      </ul>
      <button onClick={handleClick}>
        Done
      </button>
    </div>
  )
}

export default HabitCard;