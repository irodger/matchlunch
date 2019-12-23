import React from 'react';
import {animated, useSpring} from "react-spring";

import './About.css';

const About = ({ onClose }) => {
  const showPopupLayoutStyle = useSpring({
    from: {opacity: 0},
    opacity: 1,
    config: { duration: 250 },
  });

  const showPopupStyle = useSpring({
    from: {opacity: 0, transform: 'translateY(90%) scaleX(0.5)'},
    opacity: 1,
    transform: 'translateY(0) scaleX(1)',
    config: { duration: 250 },
  });

  return (
    <animated.div style={showPopupLayoutStyle} className="about" onClick={onClose}>
      <div className="about__svgs">
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 150 150" className="about__duck about__duck_first">
          <path fill="#1F74E0" d="M112.3 89.2c-4-14.8-31.8-5-45.2 1.6 1-6.4-2.8-11.9-4.8-13.8 5-5.2 15.3-16.7 15.5-21-34.2 1-58.5 24.1-53 47.6 5.4 23.6 29 22 48.8 17.9 19.8-4.2 43.9-13.7 38.8-32.3z"/>
          <path fill="#F8AC54" d="M106.1 127.6v-1.3l-5.3-15.3c-.9-2.4-6-1-5.7 1.6l3.3 16c.7 3.2 6.8 2.3 7.7-1z"/>
          <path fill="#F7F7F7" d="M93.5 87.8c-5 1.8-4.3 4.5-2.8 9 1.6 4.6 3.5 9.4 8.5 7.6 7-4.4 7.1-10.2 5.5-14.7-1.5-4.6-6.2-3.6-11.2-1.9z"/>
          <path fill="#414960" fillRule="evenodd" d="M55 81.7c0-.7-.4-1.2-1-1.6-1-.7-2.3-.6-3.5-.1-1.2.4-2.5 1.2-3.8 2l-2.2 1.8a55.3 55.3 0 003.2-7.8c.1-.6.2-1.2.1-1.8 0-.4-.2-1-.6-1.3-.2-.4-.5-.7-.9-1-.4-.2-.9-.3-1.4-.3-1 0-2 .5-3.2 1-2.2 1.3-5 3.6-7.3 6.7-4.7 6-8.4 15-4.4 24.3 3.3 7.5 9.8 10.4 16.5 11 6.6.7 13.5-.9 17.9-2.5a.9.9 0 00-.6-1.7c-4.2 1.6-10.8 3-17.1 2.4-6.3-.6-12.1-3.3-15-10-3.6-8.3-.4-16.7 4.1-22.4 2.3-2.9 4.8-5 6.8-6.1 1-.6 1.8-.8 2.4-.9l.4.1.2.2c0 .2.1.4.3.5l.1.3v1.2l-1.4 4c-1.4 3-3.4 6.3-4.8 8.5a.9.9 0 001.4 1.1c1.6-1.7 4.1-4 6.6-5.8 1.2-.8 2.4-1.5 3.4-1.8 1-.4 1.6-.3 1.8-.2l.3.5v1.3c-.3 1.2-.8 2.7-1.6 4.4-1.5 3.3-3.7 7-5.3 9.4a.9.9 0 101.5 1c1.6-2.5 4-6.2 5.5-9.7.7-1.7 1.4-3.4 1.6-4.7.1-.7.2-1.4 0-2z" clipRule="evenodd"/>
          <path fill="#414960" d="M128 85.3c1 4.2-9.5 5.5-14.9 5.6-2.8.2-1.6-1.1-.7-1.8 4.8-3 14.7-8 15.6-3.8z"/>
          <path fill="#414960" fillRule="evenodd" d="M96 90.7c.3-.3.9-.4 1.2 0 .2 0 .2.2.2.2l.2.3.3.7a129.4 129.4 0 012.6 7.8v.1a1 1 0 010 .3l-.2.4a.9.9 0 01-1.6-.5c0-.2 0-.4-.2-.7a157 157 0 00-2.6-7.5.9.9 0 010-1zm2.7 9.4zM64.4 82a21 21 0 011.7 9 .9.9 0 001.8.1c.1-2.4-.3-6.2-1.9-9.8a15.5 15.5 0 00-9.1-8.8.9.9 0 10-.6 1.7c4.1 1.4 6.6 4.5 8 7.8zM75.7 85.4a.9.9 0 00-1.2.2c-2 2.4-2.7 6.3-2.6 10 0 3.7.7 7.4 1.3 9.7a.9.9 0 001.7-.5c-.6-2.1-1.2-5.7-1.2-9.2 0-3.6.5-7 2.2-8.9.3-.4.2-1-.2-1.3zM80.1 84a.9.9 0 00-1.2 0c-1.1 1.3-1.8 3.2-2.2 5.3a37.3 37.3 0 002.5 20.8.9.9 0 101.6-.8 35.6 35.6 0 01-2.3-19.7c.4-2 1-3.5 1.7-4.4.4-.4.3-1 0-1.3z" clipRule="evenodd"/>
          <path fill="#1F74E0" d="M91 59.7a42.7 42.7 0 1027.9 80.7 42.7 42.7 0 00-28-80.7z" opacity=".3"/>
          <path fill="#fff" fillRule="evenodd" d="M107.7 137.4c0-.5-.5-.9-1-.9-8.6.3-28-4.3-36-24.8a.9.9 0 00-1.6.7 40.4 40.4 0 0037.7 26c.5 0 .9-.5.9-1zM75.7 80.7c.5.2 1-.1 1-.6 1-3.4 5.4-11.2 16.4-13.7a.9.9 0 10-.4-1.8C81 67.3 76 75.6 75 79.6c0 .5.2 1 .7 1.1z" clipRule="evenodd"/>
        </svg>
      </div>
      <animated.div style={showPopupStyle} className="about__content">
        <h3 className="about__title">MatchLunchTeam</h3>
        <p className="about__hero">DmitryMatveychuk</p>
        <p className="about__hero">RomanDvoryanov</p>
        <p className="about__hero">VladGukasov</p>
        <p className="about__hero">SergeiPopov</p>
        <p className="about__hero">AlexanderShefer</p>
        <p className="about__hero">TamaraMeteleva</p>

        <p className="about__end">That's all, folks!</p>
      </animated.div>
      <button className="about__close" onClick={onClose}>✖️</button>
    </animated.div>
  );
};

export default About;
