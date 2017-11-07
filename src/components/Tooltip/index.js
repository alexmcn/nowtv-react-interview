import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Tooltip extends Component {
  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
  }

  constructor(props) {
     super(props);
     this.state = {
       hover: false
     }
   }

  handleMouseEnter = () => {
    this.setState({ hover: true });
  }

  handleMouseLeave = () => {
    this.setState({ hover: false });
  }

  render() {
    const { children, label } = this.props;
    const tooltipStyle = this.state.hover ? 'tooltip on' : 'tooltip off';

    if (!children) return null;

    return(
      <div
        data-unit-test="target"
        className="target"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
        <div data-unit-test="tooltip" className={tooltipStyle}>{label}</div>
      </div>
    );
  }
}
