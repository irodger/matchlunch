import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} className="button button_validation">Войти</button>
    );
};

export default Button;