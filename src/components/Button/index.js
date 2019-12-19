import React from 'react';
import './Button.css';

const Button = ({ onClick, isDisabled }) => {
    return (
        <button disabled={isDisabled} onClick={onClick} className="button button_validation">Войти</button>
    );
};

export default Button;
