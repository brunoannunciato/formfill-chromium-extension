import React, { useEffect, useState } from 'react';

import './input-text.scss';
import { InputTextProps } from './types';

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, children, ...props }, ref) => {
    return (
      <>
        <div className="input-wrapper">
          <input className="input-wrapper__input-text" ref={ref} {...props} />

          <label className="input-wrapper__label">{label}</label>
        </div>
        {children}
      </>
    );
  }
);

export default InputText;
