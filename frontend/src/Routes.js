import React from 'react'
import Home from './components/Home';
import SignIn from './components/SignIn';
import Problems from './components/Problems';
import { Route } from 'wouter';

const Routes = () => {

  return (
    <>
        <Route exact path="/" component={Home} /> 
        <Route path="/signin" component={SignIn} />
        <Route path="/problems" component={Problems} />
    </>
  )
}

export default Routes