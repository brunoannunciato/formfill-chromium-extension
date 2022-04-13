import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import InputCheckbox from '../Form/InputCheckbox';
import InputText from '../Form/InputText';
import InputTextArea from '../Form/InputTextArea';
import Button from '../Button';
import ErrorAlert from '../Form/ErrorAlert';
import profiles from '../../utils/profiles';

import hooks from './hooks';

import './new-profile-form.scss';
import NewField from './components/NewField';

const NewProfileForm = () => {
  const { useAddNewField, deleteField } = hooks;
  const [isUrlBased, setIsUrlBased] = useState(false);
  const [fieldsIds, setFieldsId] = useState([0]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      formFields: [{ selectorType: 'name', separator: ',' }],
    },
  });

  useFieldArray({
    control,
    name: 'formFields',
  });

  const onSubmit = (data) => {
    profiles.add(data);
  };

  const toggleUrlBased = (event) => {
    const element = event.target;

    setIsUrlBased(element.checked);
  };

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
        onChange={toggleUrlBased}
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
              useAddNewField(fieldsIds, setFieldsId);
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
