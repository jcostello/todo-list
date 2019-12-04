import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as todoActions from './../store/actions/TodoActions';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className='todoapp'>
        <TodoForm/>
        <TodoList/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(todoActions.fetchTodos()),
});

export default connect(null, mapDispatchToProps)(App);
