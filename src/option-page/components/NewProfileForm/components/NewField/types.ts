import { FieldError } from 'react-hook-form';

export type NewFieldProps = {
  onDeleteField: Function;
  disableDelete: boolean;
  register: any;
  errors: ErrorsType;
  id: number;
};

export type ErrorsType = {
  profileName?: FieldError;
  description?: FieldError;
  urls?: FieldError;
  formFields?: {
    name?: FieldError;
    selectorType?: FieldError;
    values?: FieldError;
    separator?: FieldError;
  }[];
};
