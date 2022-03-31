import React from 'react';
import { useForm } from 'react-hook-form';
import InputRadio from '../../../Form/InputRadio';
import InputText from '../../../Form/InputText';

import './new-field.scss';

const NewField = ({ onDeleteField, disableDelete, onSubmit, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="new-field">
      <div className="new-field__column">
        <InputText label="field selector" {...register(`${id}-selector`)} />
      </div>

      <div className="new-field__column">
        <InputText label="field values" />
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
        <InputRadio name="selector" label="name" />

        <InputRadio name="selector" label="id" />

        <InputRadio name="selector" label="css selector" />
      </div>

      <div className="new-field__column">
        <InputRadio name="sppliter" label="," />

        <InputRadio name="sppliter" label="|" />

        <InputRadio name="sppliter" label=";" />

        <InputRadio name="sppliter" label="/" />
      </div>
    </div>
  );
};

export default NewField;
