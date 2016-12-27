import React from "react"
import {Router, Route, IndexRoute, hashHistory} from "react-router"

import Layout from  "../Layout"

import Home from "../containers/Home"

const Routes = (

  <Router history={hashHistory}>
    <Route path="/" component={Layout}>

      <IndexRoute component={Home}/>
      
    </Route>
  </Router>
  
  
);

export default Routes
