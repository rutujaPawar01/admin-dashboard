import React, { Component } from 'react';
import './App.scss';

import {
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './Components/Dashboard/Dashboard';
import LoginPage from './Components/LoginPage/LoginPage';

class App extends Component{
  constructor() {
    super();
    this.state = {
      isUserAuthenticated: true
    }
  }

  setUserAuthentication = (isUserAuthenticated) => {
      this.setState({isUserAuthenticated:isUserAuthenticated})
  }

  render(){ 
    return (
      <div className="app-container">
        <Switch>
          {this.state.isUserAuthenticated && 
          <>
          <Route path='/dashboard'>
            <Dashboard />
          </Route> <Redirect to='/dashboard' />
          </>
          }

          <Route path='/'>
            <LoginPage setUserAuthentication={this.setUserAuthentication} />
          </Route>      
        </Switch>

      </div>
      );
    }
}

export default App;
