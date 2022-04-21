import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {changeUserNameLocaly, makeLogin} from '../../store/actions';
import Login from './Login';
//import {cells, turn, game} from '../../store/selectors';
import {session} from '../../store/selectors';

const mapStateToProps = createStructuredSelector({
  session,
});

const mapDispatchToProps = {
  changeUserNameLocaly,
  makeLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
