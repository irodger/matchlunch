import React, { Component } from 'react';
import { request, WS_SERVER_URL } from "../../utils/api";

import Input from "../Input";
import InlineNotice from "../InlineNotice";
import Button from "../Button";

import './Login.css';

class Login extends Component {
  state = {
    type: null,
    value: '',
    fetching: false,
    isAuthed: false,
  };

  componentDidMount() {
    const socketData = {
      id: localStorage.getItem('id'),
      geo: localStorage.getItem('geo'),
    };

    this.socket = new WebSocket(WS_SERVER_URL + '/socket?id=' + socketData.id + '&geo=' + socketData.geo + '&transport=websocket');

    this.socket.onclose = () => {
      this.socket.close();
    };
  }

  onInputChange = (event) =>{
    this.setState({
      type: null,
      value: event.currentTarget.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    request('/auth', 'POST', {
      email: this.state.value,
      geo: localStorage.getItem('geo')
    }).then(({ data, status }) => {
      if (status === 200) {
        this.socket.onmessage = (event) => {
          const response = JSON.parse(event.data);

          if (data.id === response.id) {
            localStorage.setItem('email', data.email);
            localStorage.setItem('id', data.id);
            localStorage.setItem('name', data.name);

            this.setState({
              value: data.email,
              type: 'success',
              fetching: false
            });

            this.props.setUser(data.email);
          }

          this.socket.close();
        };


        this.socket.onerror = (error) => {
          console.log('error' + error);

          this.setState({
            fetching: !this.state.fetching,
            type: 'error',
          });
        };

        this.setState({
          fetching: !this.state.fetching,
        });
      } else {
        this.setState({ fetching: !this.state.fetching, type: 'error' })
      }
    });
  };

  render() {

    return (
        <form className="login" onSubmit={this.onSubmit}>
          <div className="login__row">
            <Input value={this.state.value} onChange={this.onInputChange} isError={this.state.type === 'error'} />
            <InlineNotice type={this.state.type}/>
          </div>

          <div className="login__row">
            <Button isDisabled={!this.state.value || this.state.fetching} onClick={this.onSubmit} >
              {
                this.state.type !== 'success' ? 'Login' : 'Done!'
              }
            </Button>
          </div>
        </form>
    );
  }
}

export default Login;
