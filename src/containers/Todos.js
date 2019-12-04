import {connect} from 'react-redux';
import {Todos} from '../components/Todos';

import * as todoActions from './../store/actions/TodoActions';

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(todoActions.fetchTodos()),
});

export default connect(null, mapDispatchToProps)(Todos);
