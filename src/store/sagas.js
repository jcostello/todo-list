import {call, put, select, takeEvery} from 'redux-saga/effects';
import * as todoActions from './actions/TodoActions';
import * as api from './api';
import * as authApi from './authApi';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addTodo(action) {
  try {
    const {data} = yield call(api.addTodo, action.text);
    yield put(todoActions.addTodoSucceeded({id: data.name, text: action.text}));
  } catch (e) {
    yield put(todoActions.fetchTodosFailed(e.message));
  }
}

function* fetchTodos(_action) {
  try {
    const {data} = yield call(api.fetchTodos);
    yield put(todoActions.fetchTodosSucceeded(data));
  } catch (e) {
    yield put(todoActions.fetchTodosFailed(e.message));
  }
}
const getTodos = (state) => state.todos;

function* toggleTodo(action) {
  try {
    const todos = yield select(getTodos);
    const todo = todos.find((t) => t.id === action.id);
    const {data} = yield call(api.toggleTodo,
        {...todo, completed: !todo.completed});
    yield put(todoActions.toggleTodoSucceeded(data));
  } catch (e) {
    yield put(todoActions.fetchTodosFailed(e.message));
  }
}

function* deleteTodo(action) {
  try {
    yield call(api.deleteTodo, action.id);
    yield put(todoActions.deleteTodoSucceeded(action.id));
  } catch (e) {
    yield put(todoActions.fetchTodosFailed(e.message));
  }
}

function* signUpRequest(action) {
  try {
    yield call(authApi.signUpUser, action.email, action.password);
    yield put(action.history.push('/'));
  } catch (e) {
    yield put(todoActions.fetchTodosFailed(e.message));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('SIGN_UP_REQUEST', signUpRequest);
  yield takeEvery('ADD_TODO_REQUEST', addTodo);
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos);
  yield takeEvery('TOGGLE_TODO_REQUEST', toggleTodo);
  yield takeEvery('DELETE_TODO_REQUEST', deleteTodo);
}

export default mySaga;
