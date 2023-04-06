import './registration.css';
import React from 'react';
import { Link } from "react-router-dom";

function Registration() {
    const createAccount =()=>{
   
    }
     return (
       <>
       <div className='MainDiv'>
    <form className='RegistrationModule'>
        <p className='RegistrationHeading'>Registration</p>

    <input type="Email" placeholder="Email" className='Inputbox Email'/>
    <br/>
    <input type="Password" placeholder="Password" className='Inputbox Password'/>
    <br />
    <input type="Password" placeholder="Confirm Password" className='Inputbox Password'/>
    <br />
    <label for="First Name"> </label>
    <input type="text" id="First Name" placeholder="First Name" className='Namingbox'/>
    <label for="Last Name"></label>
    <input type="text" id="Last Name" placeholder="Last Name" className='Namingbox'/>
    <br/>
    <div className='harveer12'>

    <div className='harveer123'>
    <input type="radio" id="MaleGender" name="Gender" className='genderSelection'/>
    <label for="MaleGender"> Male</label>
    </div>
    <div className='harveer123'>
    <input type="radio" id="FemaleGender" name="Gender" className='genderSelection' />
    <label for="FemaleGender">Female</label>
    </div>
    </div>
    <br/>
    <input type="checkbox" id="TermsandCondition" className='genderSelection'/>
    <label for="TermsandCondition"> I agree with terms and conditions</label>
    <br />

<button type= "button" className='RegisteredButton'>REGISTER</button>
<br />
<p className='LoginpageLink'> Have already an Account? <a href="https://www.google.com/">Login Here</a></p>

    </form>
    </div>
    </>
  );
}

export default Registration;