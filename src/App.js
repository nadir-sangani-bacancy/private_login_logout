import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { Link, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './login';
import Dashbord from './dashbord';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/Dashbord" component={Dashbord}/>
      <Redirect to="/login"/>
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
