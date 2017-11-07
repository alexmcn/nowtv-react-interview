import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../components/Message/'

const MessageList = ({messages}) => {
  if (!messages) return null;

  return (
    <ul>
      {messages.map(message => <Message messageId={message.id} key={message.id} />)}
    </ul>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default MessageList;
