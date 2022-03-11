import React, { useState } from 'react'

import './input-textarea.scss'

const InputTextArea =  React.forwardRef(({ label, helperText, ...props }, ref) => {
  const [isFilled, setIsFilled] = useState(false)

  const checkIfIsFilled = (event) => {
    const element = event.target

    if (element.value.length > 0) {
      setIsFilled(true)
      return
    }

    setIsFilled(false)
  }

  return (
    <div className="textarea-wrapper">

      <textarea
        className={`textarea-wrapper__input-textarea ${isFilled ? 'textarea-wrapper__input-textarea--filled' : ''}`}
        onInput={ (event) => checkIfIsFilled(event ) }
        ref={ ref }
        { ...props } 
      />

      <label className="textarea-wrapper__label">
        { label }
      </label>

      <span className="textarea-wrapper__helper-text">
        { helperText }
      </span>
    </div>
  )
})

export default InputTextArea