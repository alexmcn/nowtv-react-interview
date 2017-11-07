import { connect } from 'react-redux';

import MessageList from './';
import { getDateOrderedChatLog } from '../../redux/selectors';

export default connect(state => {
  return {
    messages: getDateOrderedChatLog(state)
  }
})(MessageList);
