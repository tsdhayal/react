import { Route } from 'react-router-dom';
import './Routers.css';

import Login from "./Login";
import CreateAccount from './CreateAccount';
import Services from './Services';
import Contact from "./Contact";
import Home from "./Home";
import AboutUs from "./AboutUs";
import LoginForm from './LoginForm';
import ForgotPassword from "./ForgotPassword";


function Routers(){
	return(
		<div class='routers'>
			<Route path='/services'> <Services /> </Route>
			<Route path="/login"> <Login /> </Route>
			<Route path="/create-account"> <CreateAccount /> </Route>
			<Route path="/about-us"> <AboutUs /> </Route>
			<Route path="/contact" exact={true}> <LoginForm /> </Route>
			<Route path="/" exact={true}> <Home /> </Route>

			<Route path="/forgot-password"> < ForgotPassword /> </Route>

			<Route path="/home2"> <Home2 /> </Route>
		</div>
	)
}


function Home2(){
	return(
		<div> Home </div>
	)
}


export default Routers;