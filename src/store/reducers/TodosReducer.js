const initialState = (window.Cypress && window.todosState) || [];

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO_SUCCEEDED':
      const todo = action.todo;
      return state.concat({
        id: todo.id,
        text: todo.text,
        completed: false,
      });

    case 'FETCH_TODOS_SUCCEEDED':
      const fetchedOrders = [];

      for (const key in action.todos) {
        fetchedOrders.push({...action.todos[key], id: key});
      }

      return fetchedOrders;

    case 'TOGGLE_TODO_SUCCEEDED':
      return state.map((todo) => {
        return todo.id === action.todo.id ?
          {...todo, completed: action.todo.completed} :
          todo;
      });

    case 'DELETE_TODO_SUCCEEDED':
      return state.filter((todo) => {
        return todo.id !== action.id;
      });


    default:
      return state;
  }
};

export default TodosReducer;
