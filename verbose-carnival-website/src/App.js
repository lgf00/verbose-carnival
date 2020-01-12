import React from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home';
import Layout from "./Layout"
import Projects from './pages/Projects';
import College from './pages/College';
import Schedular from './pages/Projects/Schedular';
import Scuba from './pages/Projects/Scuba';
import Travel from './pages/Projects/Travel';
import VerboseCarnival from './pages/Projects/Verbose-Carnival';
import Experience from './pages/Experience';

function App() {
  return (
    <Layout>
        <Route exact path="/" component = { Home } />
        <Route exact path="/projects" component = { Projects } />
        <Route exact path="/college" component = { College } />
        <Route exact path="/experience" component = { Experience } />
        <Route exact path="/projects/schedular" component = { Schedular } />
        <Route exact path="/projects/scuba" component = { Scuba } />
        <Route exact path="/projects/travel" component = { Travel } />
        <Route exact path="/projects/verbose-carnival" component = { VerboseCarnival } />
    </Layout>
  );
}

export default App;
