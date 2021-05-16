import { Link } from "react-router-dom";
import './CreateAccount.css';

function CreateAccount() {
  return (
    <div className="CreateAccont">
        <form id='rform' name='rform' method='POST' action=''>
        	<div className='formheader'><h4>Create Account</h4></div>
            <div><label>Name : </label></div>
            <div><input type='text' name='rname' id='rname' required placeholder='Name'/></div>
         	<div><label>Email : </label></div>
         	<div><input type='email' name='remail' id='remail' required placeholder="Email"/></div>
        	<div><label>Phone : </label></div>
         	<div><input type='tel' name='rphone' id='rphone' required placeholder='Phone'/></div>
            <div><label>Password : </label></div>
            <div><input type='password' name='rpassword' id='rpassword' required placeholder='Password'/></div>
            <div><label>Re-Enter Password : </label></div>
            <div><input type='password' name='rcpassword' id='rcpassword' required placeholder='Confirm Password'/></div>
         	<div className="formbutton">
         		<button id='rsubmit' name='rsubmit' type='submit'>Register</button>
         	</div>
        	<div>
                <div style={{marginBottom:10+'px'}}>I Have An Account <Link to='/login' className='linksacc'>Login</Link></div>
                <div>Reset New Password <Link to='/forgot-password' className='linksacc'>Forgot Password</Link></div>
            </div>
        </form>
    </div>
  );
}

export default CreateAccount;