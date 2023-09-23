import React from 'react';

import InputCheckbox from '../Form/InputCheckbox';
import InputText from '../Form/InputText';
import InputTextArea from '../Form/InputTextArea';
import Button from '../Button';
import ErrorAlert from '../Form/ErrorAlert';

import { useNewProfileForm } from './hooks';
import { NewProfileFormProps } from './types';

import './new-profile-form.scss';
import NewField from './components/NewField';

const NewProfileForm = (props: NewProfileFormProps) => {
  const {
    addNewField,
    deleteField,
    isUrlBased,
    fieldsIds,
    setFieldsId,
    toggleUrlBased,
    onSubmit,
    register,
    handleSubmit,
    errors,
  } = useNewProfileForm(props);

  return (
    <form className="new-profile-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="new-profile-form__title">Profile info</h2>
      <InputText
        label="profile name"
        {...register('profileName', { required: 'Profile name is required' })}
      >
        <ErrorAlert errors={errors} name="profileName" />
      </InputText>
      <InputText label="description (optional)" {...register('description')} />
      <InputCheckbox
        name="by-url"
        label="Automatically activate by URL"
        onChange={() => toggleUrlBased()}
        checked={isUrlBased}
      />
      {isUrlBased ? (
        <InputTextArea
          helperText="Use comma between urls, example: www.google.com, www.bruno.dev"
          label="URLs"
          {...register('urls')}
        />
      ) : null}
      <div className="new-profile-form__form-fields">
        <div className="new-profile-form__fields-header">
          <h2 className="new-profile-form__title">Form fields</h2>

          <Button
            onClick={(event) => {
              event.preventDefault();
              addNewField(fieldsIds, setFieldsId);
            }}
          >
            add new field
          </Button>
        </div>
        <div className="new-profile-form__fields-wrapper">
          {fieldsIds.map((fieldId) => {
            return (
              <NewField
                errors={errors}
                key={fieldId}
                id={fieldId}
                register={register}
                onDeleteField={() => {
                  deleteField(fieldsIds, setFieldsId, fieldId);
                }}
                disableDelete={fieldsIds.length === 1}
              />
            );
          })}
        </div>
      </div>
      <Button type="submit">Save profile</Button>
    </form>
  );
};

export default NewProfileForm;
