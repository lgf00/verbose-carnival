import React from 'react';
import { Route } from 'react-router-dom'
import Home from './home';
import Nav from "./nav"


function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component = { Home } />
    </div>
  );
}

export default App;
