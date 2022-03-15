import React from 'react'
import InputText from '../../../Form/InputText'

import './new-field.scss'

const NewField = () => {
  return (
    <div className="new-field">
      <div className="new-field__column">
        <InputText
          label="field selector"
        />
      </div>

      <div className="new-field__column">
        <InputText
          label="field values"
        />
      </div>

      <div className="new-field__column">
        <button alt="remove field" className="new-field__delete">
          +
        </button>
      </div>
    </div>
  )
}

export default NewField