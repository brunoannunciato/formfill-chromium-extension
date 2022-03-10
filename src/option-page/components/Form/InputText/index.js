import React, { useState } from 'react'

import './input-text.scss'

const InputText =  React.forwardRef(({ label, ...props }, ref) => {
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
    <div className="input-wrapper">

      <input
        className={`input-wrapper__input-text ${isFilled ? 'input-wrapper__input-text--filled' : ''}`}
        onInput={ (event) => checkIfIsFilled(event ) }
        ref={ ref }
        { ...props } 
      />

      <p className="input-wrapper__label">
        { label }
      </p>
    </div>
  )
})

export default InputText