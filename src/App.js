import React from 'react';
import './App.css';

import Logo from './components/Logo';
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo className="App-logo" />
            </header>
            <div className="App-content">
                <Login />
            </div>
            <div className="App-footer">
                <p className="App-footer__text">HR Hackathon © Space307, 2019</p>
                <p className="App-footer__text App-footer__text_team">
                    <a href="/" className="team-link">Match Lunch Team</a>
                </p>
            </div>
        </div>
    );
}

export default App;
