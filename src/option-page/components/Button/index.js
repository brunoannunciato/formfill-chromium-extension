import React from 'react'

import './button.scss'

const Button = ({ title, ...props }) => (
  <button className="button" {...props}>
    { title }
  </button>
)

export default Button