import React from 'react';
import classNames from 'classnames';

import './InlineNotice.css';

const InlineNotice = ({type}) => {
    if (type !== 'success' && type !== 'error') {
        return null;
    }

    const messages = {
        success: 'Gotcha! Sent validation message, check Slack!',
        error: 'Ooops, can’t find you!'
    };

    return <p className={classNames("inline-notice", { [`inline-notice_${type}`]: type })}>{messages[type]}</p>;
};

export default InlineNotice;