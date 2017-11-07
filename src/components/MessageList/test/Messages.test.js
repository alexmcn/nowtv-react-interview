import React from 'react';
import { shallow } from 'enzyme';
import MessageList from '../index.js';
import Message from '../../../components/Message';

describe('Message', () => {
  const defaultProps = {
    messages: [],
  };

  it('renders without crashing', () => {
    shallow(<MessageList {...defaultProps} />);
  });

  it('should render Messages', () => {
    const messages = [{ id: 1, message: 'Test 1' }, { id: 2, message: 'Test 2' }];
    const renderedItem = shallow(<MessageList {...defaultProps} messages={messages} />);
    expect(renderedItem.find(Message)).toHaveLength(2);
  });
});
