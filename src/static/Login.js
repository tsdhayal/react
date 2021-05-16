
import { Link } from "react-router-dom";
import './Login.css';

function Login() {

    const [email, setEmail] = '' //useState('')
    const [password, setPassword] = ''

    function SaveData(){
        let datas = {email, password}
        fetch("../server/insert.php", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(datas),
        }).then( function(response) {
            response.json().then( (responses )=>{
                console.log(responses)
            })
        }).then( function(error) {
            console.log(error)
        }).finaly( function(){
            console.log("finaly form data from static dir in login file")
        })
    }
  return (
    <div className="Login">
        <form id='lform' name='lform' method='POST' action=''>
        	<div className='formheader'><h4>Login User</h4></div>
         	<div><label>Email</label></div>
         	<div><input type='email' name='lemail' id='lemail' required placeholder="Email" value={email} onChange={ (e) => { setEmail(e.target.value)}}/></div>
        	<div><label>Password</label></div>
         	<div><input type='password' name='lpassword' id='lpassword' required placeholder='Password' value={password} onChange={ (e) => {setPassword(e.target.value)}} /></div>
         	<div className="formbutton">
         		<button id='lsubmit' name='lsubmit' type='submit' onClick={SaveData}>Login</button>
         	</div>
        	<div>
                <div style={{marginBottom:7+'px'}}>Create a New Account <Link to='/create-account'  className='linksLogin'>Create Account</Link></div>
                <div>Reset New Password <Link to='/forgot-password' className='linksLogin'>Forgot Password </Link></div>
            </div>
        </form>
    </div>
  );
}

export default Login;