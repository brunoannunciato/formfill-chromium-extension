import React, { useState } from 'react';

import './input-textarea.scss';

const InputTextArea = React.forwardRef(
  ({ label, helperText, ...props }, ref) => {
    return (
      <div className="textarea-wrapper">
        <textarea
          className="textarea-wrapper__input-textarea"
          onInput={(event) => checkIfIsFilled(event)}
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
