import { Link } from "react-router-dom";
import './ForgotPassword.css';

export default function ForgotPassword(){
	return(
		<div className='forgotpassword'>
			
			<form>	
				<div className='formheader'>Forgot Password<h4></h4></div>
				<div><label>Email :</label></div>
				<div><input type='email' placeholder='Email' /></div>
				<div><label>Phone : </label></div>
				<div><input type='tel' placeholder='Phone No' /></div>
				<div style={{textAlign:'center'}}>
					<button>Generate OTP </button>
				</div>
				<div>
					<div style={{marginBottom:8+'px'}}>I Remembare My Password <Link to='/login' className='linksbtn'> Login </Link></div>
					<div>Create a New Account <Link to='/create-account' className='linksbtn'> Create Account </Link></div>
				</div>
			</form>
		</div>
	)
}