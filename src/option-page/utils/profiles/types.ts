export interface IProfile {
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
