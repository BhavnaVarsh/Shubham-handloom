import './resetpassword.css';
import './registration.css';
import React, {useState}from 'react';


function Resetpassword() {

  return (
    <>
    <div className='MainDiv'>
    <form className="MainModule">
    <p className='header'>Forgot Password?</p>
    <div className='Image'>
    <img src="https://1.bp.blogspot.com/-b2hc869wRc8/X27kHZWmReI/AAAAAAAAFUw/CvEdQR5QG7sLAs89t6qt2vpMDsgqkDpCACLcBGAsYHQ/s2048/User%2Bthinking.png" alt="image" />
    </div>
    <p className='subheading1'>Enter the Email address <br/>associated with your account.</p>
    <p className='subheading2'>We will Email you a link to reset <br/>your password.</p>
    <input type="Email" id="Email" placeholder="Email" className='InputModule'/>
<br/>

<button type= "button" className='RegisteredButton'>Send</button>
<br />
<p className='LoginpageLink'><a href="https://www.google.com/" className='LoginpageLink'>Back to login</a></p>
</form>
</div>
    </>
  );
}

export default Resetpassword;