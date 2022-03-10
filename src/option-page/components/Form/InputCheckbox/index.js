import React from 'react'

import './input-checkbox.scss'

const InputCheckbox =  React.forwardRef(({name, label, id, ...props}, ref) => {
  return (
    <div className="checkbox-wrapper">
      <label htmlFor={ id } className="checkbox-wrapper__label">
        <input
          type="checkbox"
          className="checkbox-wrapper__input"
          name={ name }
          ref={ref}
          id={ id }
          {...props}
        />

        <p className="checkbox-wrapper__label-text">
          { label }
        </p>
      </label>
    </div>
  )
})

export default InputCheckbox