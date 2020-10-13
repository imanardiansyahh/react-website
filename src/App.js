import React from 'react';
import Navbar from '../src/components/navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import Signup from './components/pages/Signup'


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/services' component={Services}/>
    <Route path='/products' component={Products}/>
    <Route path='/sign-up' component={Signup}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
