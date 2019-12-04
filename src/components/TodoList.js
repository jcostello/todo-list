import React from 'react';
import {connect} from 'react-redux';
import * as todoActions from './../store/actions/TodoActions';

import TodoListItem from './TodoListItem';

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  return (
    <ul className='todo-list'>
      {
        todos.map((todo) => (
          <TodoListItem key={todo.id} {...todo}
            onCheckboxClick={toggleTodo}
            onDestroyClick={deleteTodo} />
        ))
      }
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(todoActions.toggleTodo(id)),
  deleteTodo: (id) => dispatch(todoActions.deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
