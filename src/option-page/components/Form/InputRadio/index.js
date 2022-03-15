import React from 'react'

import './input-radio.scss'

const InputRadio =  React.forwardRef(({name, label, id, ...props}, ref) => {
  return (
    <div className="radio-wrapper">
      <label htmlFor={ id } className="radio-wrapper__label">
        <input
          type="radio"
          className="radio-wrapper__input"
          name={ name }
          ref={ref}
          id={ id }
          {...props}
        />

        <p className="radio-wrapper__label-text">
          { label }
        </p>
      </label>
    </div>
  )
})

export default InputRadio