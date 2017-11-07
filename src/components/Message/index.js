import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../components/Tooltip'
import Avatar from '../../components/Avatar'

const Message = ({message, timestamp, userAvatar, userEmail}) => {
  if (!message) return null;

  return(
    <li>
      <Tooltip label={userEmail}>
        <Avatar src={userAvatar} name={userEmail} />
        <span data-unit-test="message">{message}</span><br />
        <span data-unit-test="timestamp">{timestamp}</span>
      </Tooltip>
    </li>
  );
};

Message.propTypes = {
  message: PropTypes.string,
  timestamp: PropTypes.string,
  userAvatar: PropTypes.string,
  userEmail: PropTypes.string,
}

export default Message;
