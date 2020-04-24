import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/ProtectedRoute';

import "./styles.scss";

function App() {
  localStorage.clear();
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login</Link><br/>
        <Link to='/protected'>Protected Page</Link>
        <Switch>
          <PrivateRoute exact path='/protected' component={BubblePage} />
          <Route path='/login' component={Login}></Route>
          <Route exact path="/" component={Login} />
        </Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

      </div>
    </Router>
  );
}

export default App;
