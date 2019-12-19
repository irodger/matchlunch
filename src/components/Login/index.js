import React, {useState} from 'react';

import Input from "../Input";
import InlineNotice from "../InlineNotice";
import Button from "../Button";

import './Login.css';

const Login = () => {
  const [type, setType] = useState(null);
  const [value, setValue] = useState('');

  const onInputChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const onButtonClick = () => {
    const types = ['success', 'error'];
    const randTypeId = Math.floor(Math.random() * 2);

    setType(types[randTypeId]);
  };

  return (
    <form className="login">
      <div className="login__row">
        <Input value={value} onChange={onInputChange} isError={type === 'error'} />
        <InlineNotice type={type}/>
      </div>

      <div className="login__row">
        <Button isDisabled={!value} onClick={onButtonClick} />
      </div>
    </form>
  );
};

export default Login;
