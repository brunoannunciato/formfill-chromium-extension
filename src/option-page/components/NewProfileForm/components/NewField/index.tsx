import React from 'react';
import InputRadio from '../../../Form/InputRadio';
import InputText from '../../../Form/InputText';
import ErrorAlert from '../../../Form/ErrorAlert';
import './new-field.scss';
import { NewFieldProps } from './types';

const NewField = ({
  onDeleteField,
  disableDelete,
  register,
  errors,
  id,
}: NewFieldProps) => {
  return (
    <div className="new-field">
      <div className="new-field__column">
        <InputText
          label="field selector"
          {...register(`formFields.${id}.name`, {
            required: 'Field selector is required',
          })}
        >
          <ErrorAlert errors={errors} name={`formFields.${id}.name`} />
        </InputText>
      </div>

      <div className="new-field__column">
        <InputText
          label="field values"
          {...register(`formFields.${id}.values`, {
            required: 'Field values is required',
          })}
        >
          <ErrorAlert errors={errors} name={`formFields.${id}.values`} />
        </InputText>
      </div>

      <div className="new-field__column">
        {disableDelete ? (
          <span />
        ) : (
          <button className="new-field__delete" onClick={() => onDeleteField()}>
            +
          </button>
        )}
      </div>

      <div className="new-field__column">
        <InputRadio
          name="selector"
          label="name"
          value="name"
          {...register(`formFields.${id}.selectorType`, {
            required: 'Please, select selector type',
          })}
        />

        <InputRadio
          name="selector"
          label="id"
          value="id"
          {...register(`formFields.${id}.selectorType`, {
            required: 'Please, select selector type',
          })}
        />

        <InputRadio
          name="selector"
          label="css selector"
          value="css"
          {...register(`formFields.${id}.selectorType`, {
            required: 'Please, select selector type',
          })}
        />

        <ErrorAlert errors={errors} name={`formFields.${id}.selectorType`} />
      </div>

      <div className="new-field__column">
        <InputRadio
          name="sppliter"
          label=","
          value=","
          {...register(`formFields.${id}.separator`, {
            required: 'Please, select separator type',
          })}
        />

        <InputRadio
          name="sppliter"
          label="|"
          value="|"
          {...register(`formFields.${id}.separator`, {
            required: 'Please, select separator type',
          })}
        />

        <InputRadio
          name="sppliter"
          label=";"
          value=";"
          {...register(`formFields.${id}.separator`, {
            required: 'Please, select separator type',
          })}
        />

        <InputRadio
          name="sppliter"
          label="/"
          value="/"
          {...register(`formFields.${id}.separator`)}
        />

        <ErrorAlert errors={errors} name={`formFields.${id}.separator`} />
      </div>
    </div>
  );
};

export default NewField;
