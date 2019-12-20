import React, { useState, useEffect } from 'react';
import { request, WS_SERVER_URL } from "../../utils/api";

import Input from "../Input";
import InlineNotice from "../InlineNotice";
import Button from "../Button";

import './Login.css';

const Login = ({ setUser }) => {
  const [type, setType] = useState(null);
  const [value, setValue] = useState('');
  const [fetching, setFetching] = useState(false);


  useEffect(() => {
    const socketData = {
      id: localStorage.getItem('id'),
      geo: localStorage.getItem('geo'),
    };

    // const ws = new WebSocket(WS_SERVER_URL + '/socket');
    const ws = new WebSocket(WS_SERVER_URL + '/socket?id=' + socketData.id + '&geo=' + socketData.geo + '&transport=websocket');

    ws.onopen = (event) => {
      ws.send(JSON.stringify(socketData));
      console.log(111, ws);
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log(response.data);

      ws.close();
    };

    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  });

  const onInputChange = (e) => {
    setType(null);
    setValue(e.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    request('/auth', 'POST', {
      email: value,
      geo: localStorage.getItem('geo')
    }).then(({ data, status }) => {

      if (status === 200) {
        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data.id);
        localStorage.setItem('name', data.name);

        setFetching(!fetching);
        setType('success');
        setUser(data.email);
      } else {
        setFetching(!fetching);
        setType('error');
      }
    });
  };

  return (
    <form className="login" onSubmit={onSubmit}>
      <div className="login__row">
        <Input value={value} onChange={onInputChange} isError={type === 'error'} />
        <InlineNotice type={type}/>
      </div>

      <div className="login__row">
        <Button isDisabled={!value || fetching} onClick={onSubmit} >
          {
            type !== 'success' ? 'Login' : 'Start searching'
          }
        </Button>
      </div>
    </form>
  );
};

export default Login;
