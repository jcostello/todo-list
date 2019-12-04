import {call, put, takeEvery} from 'redux-saga/effects';
import * as todoActions from './actions/TodoActions';
import * as api from './api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addTodo(action) {
  try {
    const {data} = yield call(api.addTodo, action.text);
    yield put(todoActions.addTodoSucceeded(data));
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

function* toggleTodo(action) {
  try {
    const {data} = yield call(api.toggleTodo, action.id);
    yield put(todoActions.toggleTodoSucceeded(data));
  } catch (e) {
    yield put(todoActions.fetchTodosFailed(e.message));
  }
}

function* deleteTodo(action) {
  try {
    const {data} = yield call(api.deleteTodo, action.id);
    yield put(todoActions.deleteTodoSucceeded(data.id));
  } catch (e) {
    yield put(todoActions.fetchTodosFailed(e.message));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('ADD_TODO_REQUEST', addTodo);
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos);
  yield takeEvery('TOGGLE_TODO_REQUEST', toggleTodo);
  yield takeEvery('DELETE_TODO_REQUEST', deleteTodo);
}

export default mySaga;
