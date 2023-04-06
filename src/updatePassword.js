import React from "react";
import './updatePassword.css';
import './resetpassword.css';
import './registration.css';

function UpdatePassword(){
    return(
<>
<div className='MainDiv'>
<form className="MainModule">
<p className="Heading1">Set New Password</p><br/>
<p className="Heading2">To make sure your account is secure, you'll be logged <br/>out from other devices once you set the new password.</p><br/>
<label for= "New Password"> New Password</label> <br/>
<input type= "Password" className="PasswordField"/> <br/>
<label for= "Confirm New Password">Confirm New Password</label> <br/>
<input type="Password" className="PasswordField"/><br/>
<button type= "button" className='RegisteredButton'>Submit</button>

</form>
</div>
</>
    );
}
export default UpdatePassword