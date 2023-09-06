import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import profiles from '../../utils/profiles';

export const useNewProfileForm = ({ onSubmit: closeModal, profileToEdit }) => {
  const [isUrlBased, setIsUrlBased] = useState(false);
  const [fieldsIds, setFieldsId] = useState([0]);

  const addNewField = (fieldsIds, setFieldsId) => {
    const lastId = fieldsIds[fieldsIds.length - 1];

    setFieldsId([...fieldsIds, lastId + 1]);
  };

  const deleteField = (fieldsIds, setFieldsId, fieldId) => {
    const newFieldsArr = fieldsIds.filter((id) => id !== fieldId);

    setFieldsId(newFieldsArr);
  };

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
    profiles.add(data).then(() => {
      closeModal();
    });
  };

  const toggleUrlBased = (event) => {
    const element = event.target;

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
