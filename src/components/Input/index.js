import React, {useState} from 'react';
import classNames from 'classnames';

import './Input.css';
import SlackIcon from './SlackIcon';

const Input = ({value, onChange, isError}) => {
  const [labelActive, setLabelActive] = useState(false);

  const onInputFocus = () => {
    setLabelActive(!labelActive);
  };

  return (
    <div className="input">
      <label
        htmlFor="input"
        className={classNames("input__label",
          {'input__label_active': labelActive || value})}
      >
        Your Slack Email
      </label>

      <SlackIcon className="input__icon"/>

      <input
        id="input"
        type="email"
        className={classNames("input__field",
          {
            'input__field_active': labelActive || value,
            'input__field_error': isError
          })}
        value={value}
        onChange={onChange}
        onFocus={onInputFocus}
        onBlur={onInputFocus}
      />
    </div>
  );
};

export default Input;
