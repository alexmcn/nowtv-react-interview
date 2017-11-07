import moment from 'moment';

export const getDateOrderedChatLog = state => {
  return state.messages.sort((message1, message2) => {
    const date1 = new Date(message1.timestamp);
    const date2 = new Date(message2.timestamp);
    return date2 - date1;
  });
}

export const getContributorById = (state, memberId) => state.members.find(member => member.id === memberId);

export const getMessageById = (state, messageId) => {
  const message = state.messages.find(message => message.id === messageId);
  const timestamp = moment(message.timestamp).format("D MMM YYYY, h:mma");
  const user = getContributorById(state, message.userId);

  return {
    ...message,
    timestamp,
    userAvatar: user.avatar,
    userEmail: user.email,
  };
};
