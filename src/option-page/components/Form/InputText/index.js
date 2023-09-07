import React, { useEffect, useState } from 'react';

import './input-text.scss';

const InputText = React.forwardRef(({ label, children, ...props }, ref) => {
  return (
    <>
      <div className="input-wrapper">
        <input
          className="input-wrapper__input-text"
          onInput={(event) => checkIfIsFilled(event)}
          ref={ref}
          {...props}
        />

        <label className="input-wrapper__label">{label}</label>
      </div>
      {children}
    </>
  );
});

export default InputText;
