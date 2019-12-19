import React, {useState} from 'react';

import Input from "../Input";
import InlineNotice from "../InlineNotice";
import Button from "../Button";

import './Login.css';

const Login = ({ setUser }) => {
  const [type, setType] = useState(null);
  const [value, setValue] = useState('');

  const onInputChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const types = ['success', 'error'];
    const randTypeId = Math.floor(Math.random() * 2);

    setType(types[randTypeId]);

    console.log(type)
    if (type) {
      if (type !== 'error') setUser(value);
    }
  };

  return (
    <form className="login" onSubmit={onSubmit}>
      <div className="login__row">
        <Input value={value} onChange={onInputChange} isError={type === 'error'} />
        <InlineNotice type={type}/>
      </div>

      <div className="login__row">
        <Button isDisabled={!value} onClick={onSubmit} />
      </div>
    </form>
  );
};

export default Login;
