import {
  getDateOrderedChatLog,
} from './selectors';

describe('ChatLog selectors', () => {
  const mockState = {
    messages: [
      { id: '1', timestamp: '2017-02-02T04:27:38Z' },
      { id: '2', timestamp: '2017-02-03T04:27:38Z' },
      { id: '3', timestamp: '2017-02-01T04:27:38Z' },
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
});
