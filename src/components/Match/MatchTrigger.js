import React from 'react';
import classNames from 'classnames';

import { matches} from "../../constants";

import './MatchTrigger.css';

const MatchTrigger = ({ setTheme, theme }) => {
  const { type: duoType, triggerText: duoText } = matches.duo;
  const { type: trioType, triggerText: trioText } = matches.trio;

  const onSetTheme = (type) => {
    setTheme(type);
  };

  return (
    <div
      onClick={() => onSetTheme(theme === trioType ? duoType : trioType)}
      className={classNames("match-trigger", {[`match-trigger_${theme}`]: theme})}
    >
      <div className="match-trigger__back" />
      <button type="button" className="match-trigger__button">
        {duoText}
      </button>

      <button type="button" className="match-trigger__button">
        {trioText}
      </button>
    </div>
  );
};

export default MatchTrigger;
