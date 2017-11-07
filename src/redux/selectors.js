import { getChatLog } from './actions';

export const getDateOrderedChatLog = state => {
  return state.messages.sort((message1, message2) => {
    const date1 = new Date(message1.timestamp);
    const date2 = new Date(message2.timestamp);
    return date2 - date1;
  });
}

export const getMessageById = (state, messageId) => state.messages.find(message => message.id === messageId);
