import React from 'react';
import classNames from 'classnames';

import './Button.css';

const Button = ({onClick, isDisabled, children, theme, className}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={classNames("button button_validation", className, {[`button_${theme}`]: theme})}
    >
      {children}
    </button>
  );
};

export default Button;
