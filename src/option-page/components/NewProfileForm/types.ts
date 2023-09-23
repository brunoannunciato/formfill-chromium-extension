export type NewProfileFormProps = {
  onSubmit: () => void;
  profileToEdit: string;
};

export type useNewProfileFormTypes = {
  onSubmit: Function;
  profileToEdit: string;
};

export interface IFormValues {
  profileName: string;
  description: string;
  urls: string;
  formFields: FormFieldType[];
}

export type FormFieldType = {
  name: string;
  selectorType: string;
  values: string;
  separator: string;
};
