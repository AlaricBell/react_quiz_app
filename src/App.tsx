import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import LayoutPrimary from './components/layout/LayoutPrimary'
import Question from './components/Question';
import Welcome from './components/Welcome'
import Score from './components/Score'

function App() {
  return (
    <div className="App">
      <LayoutPrimary>
        <Score />
      </LayoutPrimary>
    </div>
  );
}

export default App;