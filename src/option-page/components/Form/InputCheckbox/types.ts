import React from 'react';

export type InputCheckboxProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  label: string;
  id?: string;
  onChange?: Function;
  checked?: boolean;
};
