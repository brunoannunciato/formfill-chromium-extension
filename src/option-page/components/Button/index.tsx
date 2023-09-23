import React, { MouseEventHandler } from 'react';

import './button.scss';

const Button = ({
  children,
  onClick,
  ...props
}: {
  children: JSX.Element | string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}) => (
  <button onClick={onClick} className="button" {...props}>
    {children}
  </button>
);

export default Button;
