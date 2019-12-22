import React, { useState } from 'react';
import { request, WS_SERVER_URL } from "../../utils/api";

import Input from "../Input";
import InlineNotice from "../InlineNotice";
import Button from "../Button";

import './Login.css';


const Login = ({ setUser }) => {
  const [type, setType] = useState(null);
  const [value, setValue] = useState('');
  const [doneMessage, setDoneMessage] = useState('Done');
  const [fetching, setFetching] = useState(false);

  const onInputChange = (event) => {
    setFetching(false);
    setType(null);
    setValue(event.currentTarget.value);
  };

  const onDone = () => {
    const messages = [
      'Check yo slack, bro 🙄',
      'Press button in slack to continue',
      'You\'re awesome! 🤗',
      'Stop sending request! 😡',
      '...',
      'Our programmer hate me for this bug',
      'Just press that button, not this',
      'Stop doing this! See yo slack',
    ];

    const randomItem = Math.floor(Math.random() * messages.length);
    setDoneMessage(messages[randomItem]);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setFetching(true);
    const geo = localStorage.getItem('geo');
    request('/auth', 'POST', {
      email: value,
      geo,
    }).then(({ data, status }) => {
      if (status === 200) {
        setType('success');
        const socketQuery = `/socket?id=${data.id}&geo=${geo}&transport=websocket`;
        const socket = new WebSocket(WS_SERVER_URL + socketQuery);

        socket.onmessage = (event) => {
          const response = JSON.parse(event.data);

          if (data.id === response.id) {
            localStorage.setItem('email', data.email);
            localStorage.setItem('id', data.id);
            localStorage.setItem('name', data.name);

            setValue(data.email);
            setUser(data.email);
            setFetching(false);
          }

          socket.close();
        };

        socket.onerror = (error) => {
          console.log('error' + error);

          setFetching(false);
          setType('error');
          socket.close();
        };
      } else {
        setType('error');
      }

      setFetching(false);
    });
  };

  return (
    <form className="login" onSubmit={onSubmit}>
      <div className="login__row">
        <Input value={value} onChange={onInputChange} isError={type === 'error'} />
        <InlineNotice type={type}/>
      </div>

      <div className="login__row">
        <Button isDisabled={!value || fetching} onClick={type !== 'success' ? onSubmit : onDone} >
          {
            type !== 'success' ? 'Login' : doneMessage
          }
        </Button>
      </div>
    </form>
  );
};

export default Login;
