import React from 'react';
import PropTypes from 'prop-types';

const Message = ({message, timestamp, userId}) => {
  if (!message) return null;

  return(
    <li>
      <span data-unit-test="message">{message}</span><br />
      <span data-unit-test="timestamp">{timestamp}</span>
    </li>
  );
};

Message.propTypes = {
  message: PropTypes.string,
  timestamp: PropTypes.string,
  userId: PropTypes.string,
}

export default Message;
