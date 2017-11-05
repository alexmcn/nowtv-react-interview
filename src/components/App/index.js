import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getChatLog, getContributors} from '../../redux/actions';

export class App extends Component {
  componentDidMount = () => {
    this.props.getChatLog();
    this.props.getContributors();
  }

  render() {
    return (
      <h1>Hello!</h1>
    );
  }
}

App.propTypes = {
  getChatLog: PropTypes.func,
  getContributors: PropTypes.func,
};

const mapDispatchToProps = { getChatLog, getContributors };

export default connect(null, mapDispatchToProps)(App);
