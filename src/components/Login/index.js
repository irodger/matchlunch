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
    doneMessage: 'Done',
    fetching: false,
    isAuthed: false,
  };

  onInputChange = (event) =>{
    this.setState({
      fetching: false,
      type: null,
      value: event.currentTarget.value,
    });
  };

  onDone = () => {
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

    this.setState({
      doneMessage: messages[Math.floor(Math.random() * messages.length)],
    })
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.setState(
      {
        fetching: true,
      });

    request('/auth', 'POST', {
      email: this.state.value,
      geo: localStorage.getItem('geo')
    }).then(({ data, status }) => {
      if (status === 200) {
        this.setState({type: 'success'});

        localStorage.setItem('id', data.id);

        const socketData = {
          id: localStorage.getItem('id'),
          geo: localStorage.getItem('geo'),
        };

        this.socket = new WebSocket(WS_SERVER_URL + '/socket?id=' + socketData.id + '&geo=' + socketData.geo + '&transport=websocket');

        const socketAction = () => {
          this.socket.onmessage = (event) => {
            const response = JSON.parse(event.data);

            if (data.id === response.id) {
              localStorage.setItem('email', data.email);
              localStorage.setItem('id', data.id);
              localStorage.setItem('name', data.name);

              this.setState({
                value: data.email,
                fetching: false
              });

              this.props.setUser(data.email);
            }

            this.socket.close();
          };
        };

        setTimeout(socketAction, 1000);

        this.socket.onerror = (error) => {
          console.log('error' + error);

          this.setState({
            fetching: false,
            type: 'error',
          });

          this.socket.close();
        };
      } else {
        this.setState({ type: 'error' })
      }

      this.setState({
        fetching: false,
      });
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
            <Button isDisabled={!this.state.value || this.state.fetching} onClick={this.state.type !== 'success' ? this.onSubmit : this.onDone} >
              {
                this.state.type !== 'success' ? 'Login' : this.state.doneMessage
              }
            </Button>
          </div>
        </form>
    );
  }
}

export default Login;
