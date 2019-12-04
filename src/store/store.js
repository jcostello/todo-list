import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import TodosReducer from './reducers/TodosReducer';
import mySaga from './sagas';

const rootReducer = combineReducers({
  todos: TodosReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga);

export default store;
