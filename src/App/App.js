import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducerIndex from '../redux/reducerIndex';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import AllTaskGroupBtns from '../AllTaskGroupBtns/index';
import TaskGroup from '../TaskGroup/index';

const store = createStore(reducerIndex);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <Router>
            <Switch>
              <Route exact={true} path="/" component={AllTaskGroupBtns} />
              <Route exact={true} path="/:group" component={TaskGroup} />
              <Route exact={true} path="*" component={AllTaskGroupBtns} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
