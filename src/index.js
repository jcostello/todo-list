import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Todos from './containers/Todos';
import Auth from './containers/Auth';
import * as serviceWorker from './serviceWorker';

import store from './store/store';

import './index.css';

const root = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/' component={Todos} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
