import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import Input from './components/Input';
import InlineNotice from "./components/InlineNotice";

function App() {
    const [type, setType] = useState(null);

    const onButtonClick = () => {
        const types = ['success', 'error'];
        const randTypeId = Math.floor(Math.random() * 2);

        console.log(randTypeId);

        setType(types[randTypeId]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" placeholder="Твой Slack Email" />
            </header>
            <div className="App-content">
                <div className="App-content__row">
                    <Input />
                    <InlineNotice type={type}/>
                </div>
                <div className="App-content__row">
                    <Button onClick={onButtonClick} />
                </div>
            </div>
            <div className="App-footer">
                <p className="App-footer__text">HR Hackathon © Space307, 2019</p>
                <p className="App-footer__text App-footer__text_team">
                    <a href="" className="team-link">Match Lunch Team</a>
                </p>
            </div>
        </div>
    );
}

export default App;
