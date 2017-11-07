import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from '../../components/MessageList/container';

export class App extends Component {
  componentDidMount = () => {
    this.props.getChatLog();
    this.props.getContributors();
  }

  render() {
    return (
      <MessageList />
    );
  }
}

App.propTypes = {
  getChatLog: PropTypes.func,
  getContributors: PropTypes.func,
};

export default App;
