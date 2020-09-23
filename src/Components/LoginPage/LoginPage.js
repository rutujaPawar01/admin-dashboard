import React from 'react';

import Banner from '../Banner/Banner';
import Login from '../Login/Login';


function LoginPage(props) {
    return (
     <>
        <Banner />
        <Login setUserAuthentication={props.setUserAuthentication}
         setUserData={props.setUserData}
        />
     </>
    );
  }

  export default LoginPage;
  