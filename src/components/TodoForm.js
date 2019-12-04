import React from 'react';
import {connect} from 'react-redux';
import * as todoActions from './../store/actions/TodoActions';

const TodoForm = ({addTodo}) => {
  const input = React.createRef();

  return (
    <form onSubmit={(event) => addTodo(event, input) }>
      <input
        ref={input}
        type='text' autoFocus
        className='add-todo'
        placeholder="What needs to be done?"/>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (event, input) => {
    event.preventDefault();
    const text = input.current.value;
    input.current.value = '';

    dispatch(todoActions.addTodo(text));
  },
});

export default connect(null, mapDispatchToProps)(TodoForm);
