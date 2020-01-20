import React from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home';
import Layout from "./Layout"
import College from './pages/College';
import Schedular from './pages/Projects/Schedular';
import Scuba from './pages/Projects/Scuba';
import Travel from './pages/Projects/Travel';
import VerboseCarnival from './pages/Projects/Verbose-Carnival';

function App() {
  return (
    <Layout>
        <Route exact path="/" component = { Home } name= "Home" />
        <Route exact path="/college" component = { College } title={"College"}/>
        <Route exact path="/projects/schedular" component = { Schedular } />
        <Route exact path="/projects/scuba" component = { Scuba } />
        <Route exact path="/projects/travel" component = { Travel } />
        <Route exact path="/projects/verbose-carnival" component = { VerboseCarnival } />
    </Layout>
  );
}

export default App;
