import {
  getDateOrderedChatLog,
  getMessageById,
  getContributorById,
} from './selectors';

describe('ChatLog selectors', () => {
  const mockState = {
    messages: [
      { id: '1', timestamp: '2017-02-02T04:27:38Z', message: 'message 1' },
      { id: '2', timestamp: '2017-02-03T04:27:38Z', message: 'message 2' },
      { id: '3', timestamp: '2017-02-01T04:27:38Z', message: 'message 3' },
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
  });

  it('getMessageById() returns meesages with human readable date', () => {
    expect(getMessageById(mockState, '3').timestamp).toEqual('1 Feb 2017, 4:27am');
  });

  describe('Contributor selectors', () => {
    const mockState = {
      members: [
        { "id": "1", "firstName": "Martin", "lastName": "Bradley" },
        { "id": "2", "firstName": "Peter", "lastName": "Cliff" },
        { "id": "3", "firstName": "Sarah", "lastName": "Hill" },
      ]
    };

    it('getContributorById() gets a contributor by Id', () => {
      expect(getContributorById(mockState, '2').lastName).toEqual('Cliff');
    });
  });
});
