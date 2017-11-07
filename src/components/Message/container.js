import { connect } from 'react-redux';

import Message from './';
import { getMessageById } from '../../redux/selectors';

export default connect((state, ownProps) => {
  return {
    ...getMessageById(state, ownProps.messageId)
  }
})(Message);
