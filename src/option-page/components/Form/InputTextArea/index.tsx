import React from 'react';

import { InputTextAreaType } from './types';

import './input-textarea.scss';

const InputTextArea = React.forwardRef<HTMLTextAreaElement, InputTextAreaType>(
  ({ label, helperText, ...props }, ref) => {
    return (
      <div className="textarea-wrapper">
        <textarea
          className="textarea-wrapper__input-textarea"
          ref={ref}
          {...props}
        />

        <label className="textarea-wrapper__label">{label}</label>

        <span className="textarea-wrapper__helper-text">{helperText}</span>
      </div>
    );
  }
);

export default InputTextArea;
