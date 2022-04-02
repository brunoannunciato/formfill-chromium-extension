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
          {...register(`formFields.${id}.name`, { required: true })}
        />
      </div>

      <div className="new-field__column">
        <InputText
          label="field values"
          {...register(`formFields.${id}.values`, { required: true })}
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
          {...register(`formFields.${id}.selectorType`, { required: true })}
        />

        <InputRadio
          name="selector"
          label="id"
          value="id"
          {...register(`formFields.${id}.selectorType`, { required: true })}
        />

        <InputRadio
          name="selector"
          label="css selector"
          value="css"
          {...register(`formFields.${id}.selectorType`, { required: true })}
        />
      </div>

      <div className="new-field__column">
        <InputRadio
          name="sppliter"
          label=","
          value=","
          {...register(`formFields.${id}.separator`, { required: true })}
        />

        <InputRadio
          name="sppliter"
          label="|"
          value="|"
          {...register(`formFields.${id}.separator`, { required: true })}
        />

        <InputRadio
          name="sppliter"
          label=";"
          value=";"
          {...register(`formFields.${id}.separator`, { required: true })}
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
