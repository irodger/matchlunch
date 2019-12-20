import React, { useState } from 'react';
import classNames from 'classnames';
import { useSpring, animated } from 'react-spring';

import Button from '../Button';
import IconQuote from "./IconQuote";
import MatchTrigger from "./MatchTrigger";
import MatchScene from "../MatchScene";


import { matches } from '../../constants';

import './Match.css';


const Match = ({ onChangeTheme }) => {
  const [theme, setTheme] = useState('duo');
  const [isSearching, setSearching] = useState(false);
  const isDefaultTheme = theme === 'duo' || false;

  const onSwitchTheme = (type) => {
    onChangeTheme(type);
    setTheme(type);
  };

  const duoStyleProps = useSpring({
    opacity: isDefaultTheme ? 1 : 0,
    transform: `translateY(${isDefaultTheme ? 0 : -50}px)`
  });

  const trioStyleProps = useSpring({
    opacity: !isDefaultTheme ? 1 : 0,
    transform: `translateY(${!isDefaultTheme ? 0 : -50}px)`
  });

  const onStartSearching = () => {
    setSearching(!isSearching);
  };

  return (
    <div className={classNames("match", {[`match_${theme}`]: theme})}>
      {
        !isSearching ? (
          <div>
            {
              isDefaultTheme ?
                <animated.div style={duoStyleProps} className="match__description">
                  <IconQuote className="match__description-icon"/> {matches.duo.description}
                </animated.div>
                :
                <animated.div style={trioStyleProps} className="match__description">
                  <IconQuote className="match__description-icon"/> {matches.trio.description}
                </animated.div>
            }
          </div>
        ) : null
      }


      <MatchScene isAnimated={isSearching} type={theme}/>

      {
        !isSearching ?
          <div className="match__trigger">
            <MatchTrigger setTheme={onSwitchTheme} theme={theme} />
          </div>
          : null
      }

      <div className={classNames("match__fire", {'math__fire_searching': isSearching})}>
        <Button theme={theme} isDisabled={isSearching} onClick={onStartSearching}>
          {
            isSearching ? matches[theme].searchButtonText : matches[theme].buttonText
          }
        </Button>
      </div>
    </div>
  );
};

export default Match;
