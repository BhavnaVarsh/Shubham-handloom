import './login.css';
import React, {useState}from 'react';
import { Switch, Route, Router,useHistory
} from "react-router-dom";
  import Registration from './registration';

// import backgroundImage from '../src/images/nnnn.jpg';

function Login() {
//  const newpage=()=>{
  // alert("hello")
  
  // window.location.href = "/registration";
  return (
    <>
 {/* <Router>

        <Route exact path="./registration" component={Registration} />

        </Router> */}

<div className='backgroundImage'>
    <form className='signinModule'>
<p className='loginheading'>Login</p>
<p className='loginSubheading'>Please enter your login details here</p>
<label for="Email">Username or Email: </label>
    <br />
    <input type="text" id="Email" className= 'inputField'/>
    <br/>
    <label for="Password">Password: </label>
    <br />
    <input type="Password" id="Password" className= 'inputField'/>
    <br />
<a href="www.google.com">Forgot Password?</a> 
<br/>
<button type= "button" className='submitButton'>Login</button>
<a href="www.google.com" className='createAccount' onClick={Login}>Create Account</a>

    </form>
    </div>
    
    </>
  );
}

export default Login;