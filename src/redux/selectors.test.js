import {
  getDateOrderedChatLog,
  getMessageById,
  getContributorById,
} from './selectors';

describe('ChatLog selectors', () => {
  const mockState = {
    messages: [
      { id: '1', timestamp: '2017-02-02T04:27:38Z', message: 'message 1', userId: '1' },
      { id: '2', timestamp: '2017-02-03T04:27:38Z', message: 'message 2', userId: '2'},
      { id: '3', timestamp: '2017-02-01T04:27:38Z', message: 'message 3', userId: '3' },
    ],
    members: [
      { "id": "1", "firstName": "Martin", "lastName": "Bradley", avatar: "B", email: "b@b.com" },
      { "id": "2", "firstName": "Peter", "lastName": "Cliff", avatar: "C", email: "c@c.com" },
      { "id": "3", "firstName": "Sarah", "lastName": "Hill", avatar: "H", email: "h@h.com" },
    ]
  };

  it('getDateOrderedChatLog() gets messages', () => {
    expect(getDateOrderedChatLog(mockState).length).toEqual(3);
  });

  it('getDateOrderedChatLog() gets messages sorted by date', () => {
    expect(getDateOrderedChatLog(mockState)[0].id).toEqual('2');
    expect(getDateOrderedChatLog(mockState)[1].id).toEqual('1');
    expect(getDateOrderedChatLog(mockState)[2].id).toEqual('3');
  });

  it('getMessageById() gets a message by Id', () => {
    expect(getMessageById(mockState, '3').message).toEqual('message 3');
    expect(getMessageById(mockState, '2').userAvatar).toEqual('C');
    expect(getMessageById(mockState, '1').userEmail).toEqual('b@b.com');
  });

  it('getMessageById() returns meesages with human readable date', () => {
    expect(getMessageById(mockState, '3').timestamp).toEqual('1 Feb 2017, 4:27am');
  });

  describe('Contributor selectors', () => {
    it('getContributorById() gets a contributor by Id', () => {
      expect(getContributorById(mockState, '2').lastName).toEqual('Cliff');
    });
  });
});
