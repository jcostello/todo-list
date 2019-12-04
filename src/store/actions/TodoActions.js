export const addTodo = (text) => ({
  type: 'ADD_TODO_REQUEST',
  text: text,
});

export const addTodoSucceeded = (todo) => ({
  type: 'ADD_TODO_SUCCEEDED', todo: todo,
});

export const fetchTodos = () => ({
  type: 'FETCH_TODOS_REQUEST',
});

export const fetchTodosSucceeded = (todos) => ({
  type: 'FETCH_TODOS_SUCCEEDED', todos: todos,
});

export const fetchTodosFailed = (message) => ({
  type: 'FETCH_TODOS_FAILED', message: message,
});

export const toggleTodo = (todo) => ({
  type: 'TOGGLE_TODO_REQUEST', id: todo,
});

export const toggleTodoSucceeded = (todo) => ({
  type: 'TOGGLE_TODO_SUCCEEDED', todo: todo,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO_REQUEST', id: id,
});

export const deleteTodoSucceeded = (id) => ({
  type: 'DELETE_TODO_SUCCEEDED', id: id,
});

export const signUpUser = (history) => ({
  type: 'SIGN_UP_REQUEST', history: history,
});

export const signUpSucceeded = (token) => ({
  type: 'SIGN_UP_SUCCEEDED', token: token,
});
