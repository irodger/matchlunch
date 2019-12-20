import React, { useState } from 'react';
import classNames from 'classnames';
import { useSpring, animated } from 'react-spring';
import { request} from "../../utils/api";

import Button from '../Button';
import IconQuote from "./IconQuote";
import MatchTrigger from "./MatchTrigger";
import MatchScene from "../MatchScene";


import { matches } from '../../constants';

import './Match.css';

const SlackIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 106" className={className}>
    <path fill="#40C5EE" d="M35.75 27.25a8.25 8.25 0 110 16.5H8.25c-4.56 0-8.25-.7-8.25-5.25 0-4.56 3.7-8.25 8.25-8.25l27.5-3zM35.75 16.5a8.25 8.25 0 110-16.5 8.25 8.25 0 010 16.5z"/>
    <path fill="#DE245C" d="M27.5 64A8.25 8.25 0 0144 64v27.5c0 4.56-1.94 14.5-6.5 14.5-4.56 0-8.25-3.94-8.25-8.5L27.5 64zM8.25 55.75A8.25 8.25 0 000 64c0 4.56 4.44 6.75 9 6.75 8.21 0 8.5-9.83 10.5-16l-11.25 1z"/>
    <path fill="#EBB13E" d="M91.75 55.75a8.25 8.25 0 110 16.5h-27.5c-4.56 0-8.25-.7-8.25-5.25 0-4.56 3.7-8.25 8.25-8.25l27.5-3zM72.5 91.5c0 4.56-3.7 8.25-8.25 8.25-9.4 0-9.33-13.31-10.75-20 6.38 2.08 19 3 19 11.75z"/>
    <path fill="#37B57F" d="M56 13c0-4.56.7-8.25 5.25-8.25 4.56 0 8.25 3.7 8.25 8.25l3 20.5c0 4.56-3.7 8.25-8.25 8.25-4.56 0-8.25-1.7-8.25-6.25V13zM100 35.5c0-4.56-3.7-11.5-8.25-11.5-9.43 0-9.63 14.02-11.25 20.75 6.75-.6 19.5.58 19.5-9.25z"/>
  </svg>
);

const Match = ({ onChangeTheme }) => {
  const [theme, setTheme] = useState('duo');
  const [isSearching, setSearching] = useState(false);
  const [isFounded, setFounded] = useState(false);
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

    // setTimeout(() => { setFounded(!isFounded) }, 3000 );

    const { id, geo, email } = window.localStorage;
    const query = `id=${id}&geo=${geo}&email=${email}&opponents=${theme === 'duo' ? 1 : 2}`

    request(`/querrify?${query}`, 'get').then(({ status }) => {
      if (status === 200) {
        setFounded(!isFounded)
      } else {
        console.log('error');
      }

      setSearching(!isSearching);
    });
  };

  return (
    <div className={classNames("match", {[`match_${theme}`]: theme})}>
      {
        isFounded ? (
          <SlackIcon className="match__slack-icon" />
        ) : null
      }

      {
        !isSearching && !isFounded ? (
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

      {
        !isFounded ?
          <MatchScene isAnimated={isSearching} type={theme}/>
          : null
      }


      {
        !isSearching && !isFounded?
          <div className="match__trigger">
            <MatchTrigger setTheme={onSwitchTheme} theme={theme} />
          </div>
          : null
      }

      <div className={classNames("match__fire", {'match__fire_searching': isSearching})}>
        {
          isFounded ? (
            <a href="/" className="button">Lunch partner found</a>
          ) : (
            <Button theme={theme} isDisabled={isSearching} onClick={onStartSearching}>
              {
                isSearching ? matches[theme].searchButtonText : matches[theme].buttonText
              }
            </Button>
          )
        }
      </div>
    </div>
  );
};

export default Match;
