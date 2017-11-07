import { connect } from 'react-redux';

import App from './';
import { getChatLog, getContributors } from '../../redux/actions';

export default connect( null, { getChatLog, getContributors } )(App);
