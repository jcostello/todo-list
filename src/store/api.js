import axios from './axios';

export const fetchTodos = () => {
  return axios.get('/todos.json');
};

export const addTodo = (text) => {
  return axios.post('/todos.json', {text: text, completed: false});
};

export const toggleTodo = (todo) => {
  return axios.put(`/todos/${todo.id}.json`, todo);
};

export const deleteTodo = (id) => {
  return axios.delete(`/todos/${id}.json`);
};
