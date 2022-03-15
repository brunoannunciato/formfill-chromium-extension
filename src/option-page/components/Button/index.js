import React from 'react'

import './button.scss'

const Button = ({ children, ...props }) => (
  <button className="button" {...props}>
    { children }
  </button>
)

export default Button