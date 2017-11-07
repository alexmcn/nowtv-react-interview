import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from '../index.js';

describe('Tooltip', () => {
  const defaultProps = {
    children: <p>mouseover this</p>,
    label: 'LABEL',
  };

  it('renders without crashing', () => {
    shallow(<Tooltip {...defaultProps} />);
  });

  it('has children', () => {
    const renderedItem = shallow(<Tooltip {...defaultProps} />);
    expect(renderedItem.find('p').text()).toEqual('mouseover this');
  });

  it('has a label', () => {
    const renderedItem = shallow(<Tooltip {...defaultProps} />);
    expect(renderedItem.find('[data-unit-test="tooltip"]').text()).toEqual('LABEL');
  });

  it('has class "show" when onMouseEnter fires', () => {
    const renderedItem = shallow(<Tooltip {...defaultProps} />);
    renderedItem.find('[data-unit-test="target"]').simulate('mouseEnter');
    expect(renderedItem.find('[data-unit-test="tooltip"]').prop('className')).toEqual('tooltip on');
  });

  it('has class "hide" when onMouseLeave fires', () => {
    const renderedItem = shallow(<Tooltip {...defaultProps} />);
    renderedItem.find('[data-unit-test="target"]').simulate('mouseEnter');
    renderedItem.find('[data-unit-test="target"]').simulate('mouseLeave');
    expect(renderedItem.find('[data-unit-test="tooltip"]').prop('className')).toEqual('tooltip off');
  });


});
