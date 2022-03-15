import React from 'react'
import InputRadio from '../../../Form/InputRadio'
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

      <div className="new-field__column">
        <InputRadio
          name="selector"
          label="name"
        />

        <InputRadio
          name="selector"
          label="id"
        />

        <InputRadio
          name="selector"
          label="css selector"
        />
      </div>

      <div className="new-field__column">
        <InputRadio
          name="sppliter"
          label=","
        />

        <InputRadio
          name="sppliter"
          label="|"
        />

        <InputRadio
          name="sppliter"
          label=";"
        />

        <InputRadio
          name="sppliter"
          label="/"
        />
      </div>
    </div>
  )
}

export default NewField