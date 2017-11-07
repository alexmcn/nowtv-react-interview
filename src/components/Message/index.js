import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../components/Tooltip'

const Message = ({message, timestamp, userEmail}) => {
  if (!message) return null;

  return(
    <li>
      <Tooltip label={userEmail}>
        <span data-unit-test="message">{message}</span><br />
        <span data-unit-test="timestamp">{timestamp}</span>
      </Tooltip>
    </li>
  );
};

Message.propTypes = {
  message: PropTypes.string,
  timestamp: PropTypes.string,
  userEmail: PropTypes.string,
}

export default Message;
