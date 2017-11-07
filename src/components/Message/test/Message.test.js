import React from 'react';
import { shallow } from 'enzyme';
import Message from '../index.js';

describe('Message', () => {
  const defaultProps = {
    message: 'This is my message to you',
    timestamp: '1 Feb 2017, 4:27am',
    userId: '5',
  };

  it('renders without crashing', () => {
    shallow(<Message {...defaultProps} />);
  });

  it('has a message', () => {
    const renderedItem = shallow(<Message {...defaultProps} />);
    expect(renderedItem.find('[data-unit-test="message"]').text()).toEqual('This is my message to you');
  });

  it('has a timestamp', () => {
    const renderedItem = shallow(<Message {...defaultProps} />);
    expect(renderedItem.find('[data-unit-test="timestamp"]').text()).toEqual('1 Feb 2017, 4:27am');
  });
});
