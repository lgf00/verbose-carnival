import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './Home';
import Projects from "./Projects"
import Nav from "./Nav"


function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component = { Home } />
      <Route exact path="/projects" component = { Projects } />
    </div>
  );
}

export default App;
