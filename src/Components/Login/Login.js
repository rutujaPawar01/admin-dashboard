import React, { Component } from 'react';
import './Login.scss';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Dashboard from '../Dashboard/Dashboard';  

class Login extends Component {
    state={
        username : '',
        password : '',
        isError: false
    }

    getUserName = (event) =>  {
        this.setState({username : event.target.value}); 
    }

    getPassword = (event) =>  {
        this.setState({password : event.target.value}); 
    }

    logIn=()=>{
        const url = "https://ic3haoorgj.execute-api.ap-south-1.amazonaws.com/api/auth";
        const body = {
            "username": this.state.username,
            "password":this.state.password
        
        }
        axios.post(url, body).then((response) => {
            this.props.setUserAuthentication(true);
            this.setState({isError : false});
            this.props.setUserData(response.data.data);
        }).catch((error) => {
            this.setState({isError : true});
        })
    }

    render(){
        return(
            <div className="login-container">
                <div className="login-controller">
                    <h2 className='margin-b-1 login-title'>Let's Get Started</h2>
                    <input 
                        type="text" 
                        placeholder='Email' 
                        className='margin-b-1 border-r-15 input-field'
                        value={this.state.username} onChange={(event)=>this.getUserName(event)}  />

                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={this.state.password} onChange={(event)=>this.getPassword(event)}
                        className='margin-b-1 border-r-15 input-field'/>
                    {this.state.isError && <label className='margin-b-1 error'>Incorrect Email or Password</label>}
                    <button 
                        className='margin-b-1 border-r-15 login-button'
                        onClick={(event)=>this.logIn()}>
                        SIGN IN</button>
                </div>
            </div>
        )
    }

}

export default Login;