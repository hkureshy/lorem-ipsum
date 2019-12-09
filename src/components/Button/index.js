import React from 'react'

import './button.scss'

const Button = props => {
  return (
    <button
      className={`${props.className || ''} be-button`}
    >
      {props.children}
    </button>
  )
}

export default Button
