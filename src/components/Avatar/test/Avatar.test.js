import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../index.js';

describe('Avatar', () => {
  const defaultProps = {
    src: 'http://url',
    name: 'Brian',
  }

  it('renders without crashing', () => {
    shallow(<Avatar />);
  });

  it('renders an image', () => {
    const renderedItem = shallow(<Avatar {...defaultProps} />);
    expect(renderedItem.find('img').prop('src')).toEqual('http://url');
    expect(renderedItem.find('img').prop('alt')).toEqual('Brian');
  });
});
