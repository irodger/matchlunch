import React, { useState } from 'react';
import classNames from 'classnames';

import './Input.css';
import SlackIcon from './SlackIcon';

const Input = () => {
    const [labelActive, setLabelActive] = useState(false);
    const [value, setValue] = useState('');

    const onInputFocus = () => {
        setLabelActive(!labelActive);
    };

    const onInputChange = (e) => {
        setValue(e.currentTarget.value);
    };

    return (
        <div className="input">
            <label
                htmlFor="input"
                className={classNames("input__label", {'input__label_active': labelActive || value})}
            >
                Your Slack Email
            </label>

            <SlackIcon className="input__icon" />

            <input
                id="input"
                type="email"
                className={classNames("input__field", {'input__field_active': labelActive || value})}
                value={value}
                onChange={onInputChange}
                onFocus={onInputFocus}
                onBlur={onInputFocus}
            />
        </div>
    );
};

export default Input;