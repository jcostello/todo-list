import React from 'react';

const TodoListItem = ({id, text, completed,
  onCheckboxClick, onDestroyClick}) => {

  return (
    <li className={ completed ? 'completed' : null}>
      <input className='toggle' type='checkbox'
        checked={completed} onChange={() => onCheckboxClick(id)}/>
      <label>{text}</label>
      <button className='destroy' onClick={() => {
        if (window.confirm('Are you sure?')) onDestroyClick(id);
      }}/>
    </li>
  );
};

export default TodoListItem;
