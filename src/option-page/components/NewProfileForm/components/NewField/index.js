import React from 'react';
import InputRadio from '../../../Form/InputRadio';
import InputText from '../../../Form/InputText';

import './new-field.scss';

const NewField = ({ onDeleteField, disableDelete, register, id }) => {
  return (
    <div className="new-field">
      <div className="new-field__column">
        <InputText
          label="field selector"
          {...register(`formFields.${id}.name`)}
        />
      </div>

      <div className="new-field__column">
        <InputText
          label="field values"
          {...register(`formFields.${id}.values`)}
        />
      </div>

      <div className="new-field__column">
        {disableDelete ? (
          <span />
        ) : (
          <button
            alt="remove field"
            className="new-field__delete"
            onClick={onDeleteField}
          >
            +
          </button>
        )}
      </div>

      <div className="new-field__column">
        <InputRadio
          name="selector"
          label="name"
          value="name"
          {...register(`formFields.${id}.selectorType`)}
        />

        <InputRadio
          name="selector"
          label="id"
          value="id"
          {...register(`formFields.${id}.selectorType`)}
        />

        <InputRadio
          name="selector"
          label="css selector"
          value="css"
          {...register(`formFields.${id}.selectorType`)}
        />
      </div>

      <div className="new-field__column">
        <InputRadio
          name="sppliter"
          label=","
          value=","
          {...register(`formFields.${id}.separator`)}
        />

        <InputRadio
          name="sppliter"
          label="|"
          value="|"
          {...register(`formFields.${id}.separator`)}
        />

        <InputRadio
          name="sppliter"
          label=";"
          value=";"
          {...register(`formFields.${id}.separator`)}
        />

        <InputRadio
          name="sppliter"
          label="/"
          value="/"
          {...register(`formFields.${id}.separator`)}
        />
      </div>
    </div>
  );
};

export default NewField;
