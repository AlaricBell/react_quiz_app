import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Provider} from 'react-redux'
import { store } from './stateManager/store'

import LayoutPrimary from './components/layout/LayoutPrimary'
import Question from './components/Question';
import Welcome from './components/Welcome'
import Score from './components/Score'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LayoutPrimary>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Welcome />
              </Route>
              <Route path="/question">
                <Question />
              </Route>
              <Route path="/score">
                <Score />
              </Route>
            </Switch>
          </Router>
        </LayoutPrimary>
      </div>
    </Provider>
  );
}

export default App;