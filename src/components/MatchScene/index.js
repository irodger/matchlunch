import React from 'react';
import classNames from 'classnames';

import DuoDucks from "./DuoDucks";
import TrioDucks from "./TrioDucks";

import './MatchScene.css';



const MatchScene = ({type, isAnimated}) => {
  const ducks = {
    duo: <DuoDucks isAnimated={isAnimated} />,
    trio: <TrioDucks  isAnimated={isAnimated} />,
  };

  return <div className={classNames("match-scene", {'match-scene_animated': isAnimated})}>{ducks[type]}</div>;
};

export default MatchScene;
