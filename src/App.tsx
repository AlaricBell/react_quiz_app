import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import LayoutPrimary from './components/layout/LayoutPrimary'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <LayoutPrimary>
        <Welcome />
      </LayoutPrimary>
    </div>
  );
}

export default App;