import React from 'react';
import AlertIcon from './AlertIcon';
import { ErrorMessage } from '@hookform/error-message';
import './error-alert.scss';
import { ErrorAlertProps } from './types';

const ErrorAlert = ({ errors, name }: ErrorAlertProps) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <span className="error-alert">
          <AlertIcon />
          {message}
        </span>
      )}
    />
  );
};

export default ErrorAlert;
