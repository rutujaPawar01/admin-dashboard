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
      isUserAuthenticated: false,
      data: {}
    }
  }

  setUserAuthentication = (isUserAuthenticated) => {
      this.setState({isUserAuthenticated:isUserAuthenticated})
  }

  setUserData = (data) => {
    this.setState({data})
  }

  render(){
    return (
      <div className="app-container">
        <Switch>
          {this.state.isUserAuthenticated && 
          <>
          <Route path='/dashboard'>
            <Dashboard 
            data={this.state.data}
            setUserData={this.setUserData}
            setUserAuthentication={this.setUserAuthentication} 
             />
          </Route> <Redirect to='/dashboard' />
          </>
          }

          <Route path='/'>
            <LoginPage 
            setUserAuthentication={this.setUserAuthentication} 
            setUserData={this.setUserData}
            />
          </Route>      
        </Switch>

      </div>
      );
    }
}

export default App;
