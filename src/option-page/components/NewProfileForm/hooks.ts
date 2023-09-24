import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import profiles from '../../utils/profiles';

import { FormFieldType, IFormValues, useNewProfileFormTypes } from './types';
import { IProfile } from '../../utils/profiles/types';

export const useNewProfileForm = ({
  onSubmit: closeModal,
  profileToEdit,
}: useNewProfileFormTypes) => {
  const [isUrlBased, setIsUrlBased] = useState(false);
  const [fieldsIds, setFieldsId] = useState([0]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<IFormValues>({
    defaultValues: {
      formFields: [{ selectorType: 'name', separator: ',' }],
    },
  });

  useEffect(() => {
    if (!profileToEdit) return;

    profiles.get(profileToEdit).then((profile: IProfile) => {
      setValue('profileName', profile.profileName);
      setValue('description', profile.description);

      setFieldsId(
        Array.apply(null, { length: profile.formFields.length }).map(
          Number.call,
          Number
        )
      );

      if (profile.urls) {
        setIsUrlBased(true);
        setValue('urls', profile.urls);
      }
      profile.formFields.map((data: FormFieldType, index: number) => {
        setValue(`formFields.${index}.name`, data.name);
        setValue(`formFields.${index}.selectorType`, data.selectorType);
        setValue(`formFields.${index}.values`, data.values);
        setValue(`formFields.${index}.separator`, data.separator);
      });
    });
  }, []);

  const addNewField = (fieldsIds: number[], setFieldsId: Function) => {
    const lastId = fieldsIds[fieldsIds.length - 1];

    setFieldsId([...fieldsIds, lastId + 1]);
  };

  const deleteField = (
    fieldsIds: number[],
    setFieldsId: Function,
    fieldId: Number
  ) => {
    const newFieldsArr = fieldsIds.filter((id) => id !== fieldId);

    setFieldsId(newFieldsArr);
  };

  useFieldArray({
    control,
    name: 'formFields',
  });

  const onSubmit = (data: IFormValues) => {
    if (profileToEdit) {
      return profiles.update(profileToEdit, data).then(() => {
        closeModal();
      });
    }

    profiles.add(data).then(() => {
      closeModal();
    });
  };

  const toggleUrlBased = (event?: Event) => {
    const element = <HTMLInputElement>event.target;

    setIsUrlBased(element.checked);
  };

  return {
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
  };
};
