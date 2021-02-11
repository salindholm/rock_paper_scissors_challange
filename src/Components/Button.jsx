import React from 'react'

const Button = (props) => {
  return (
    <div value={props.name} onClick={props.onClick}>
      <img
        class='user-selection-img'
        data-cy={props.name}
        src={props.img}
        alt='img'
      />
    </div>
  )
}

export default Button
