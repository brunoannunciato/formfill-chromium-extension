import React from 'react';
import AlertIcon from './AlertIcon';
import { ErrorMessage } from '@hookform/error-message';
import './error-alert.scss';

const ErrorAlert = ({ errors, name }) => {
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
