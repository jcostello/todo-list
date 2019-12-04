import React, {Component} from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

export class Todos extends Component {
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