import React, { useState} from 'react';
import classNames from 'classnames';
import { parseUrlStrParams } from './utils';
import Logo from './components/Logo';
import Login from "./components/Login";
import Match from './components/Match';
import DuckFace from "./components/DuckFace";
import About from "./components/About";

import './App.css';


function App() {
  const [user, setUser] = useState(localStorage.getItem('email') || '');
  const [theme, setTheme] = useState('duo');
  const [shownAbout, toggleAbout] = useState(false);
  const { geo = 'spb' } = parseUrlStrParams();

  const makeUser = (newUser) => {
    setUser(newUser);
  };

  const onChangeTheme = (type) => {
    setTheme(type);
  };

  if (geo) localStorage.setItem('geo', geo);

  return (
    <div className={classNames("App", {[`App_${theme}`]: theme})}>
      {
        shownAbout ? <About onClose={() => toggleAbout(!shownAbout)} /> : null
      }

      <header className="App-header">
        <Logo
          fill={theme === 'duo' ? '#1F74E0' : '#0CB5CC'}
          className={classNames("App-logo", {'App-logo_logged': user})}
          isLoggedIn={user}
        />
      </header>
      <div className="App-content">
        {
          !user ?
            <div className="App-login">
              <DuckFace className="App-logo-duck" />

              <Login setUser={makeUser}/>
            </div>
            : <Match onChangeTheme={onChangeTheme} />
        }
      </div>
      <div className="App-footer">
        <p className="App-footer__text">HR Hackathon © Space307, 2019</p>
        <p className="App-footer__text App-footer__text_team">
          {/*<a href="/" onClick={() => toggleAbout(!shownAbout)} className="team-link">Match Lunch Team</a>*/}
          <button onClick={() => toggleAbout(!shownAbout)} className="team-link">Match Lunch Team</button>
        </p>
      </div>
    </div>
  );
}

export default App;
