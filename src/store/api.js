import axios from './axios';

export const fetchTodos = () => {
  return axios.get('/todos.json');
};

export const addTodo = (text) => {
  return axios.post('/todos.json', {text: text, completed: false});
};

export const toggleTodo = (id) => {
  return axios.put(`/todos/${id}.json`, {completed: true});
};

export const deleteTodo = (id) => {
  return axios.delete(`/todos/${id}.json`);
};
