import { Link } from "react-router-dom";
import "./Paths.css";


function Paths(){
	return (
		<div className='paths'>
			<Link to="/"  className="links active"><i className="fas fa-home"></i> Home <span></span></Link>
			<Link to="/services" className="links"><i className="fab fa-servicestack"></i> Services <span></span></Link>
			<Link to="/login" className="links"><i className="fad fa-sign-in"></i> Login <span></span></Link>
			<Link to="/create-account" className="links"><i className="fad fa-user-plus"></i> Create Account <span></span></Link>
			<Link to="/about-us" className="links"> About Us <span></span></Link>
			<Link to="/contact" className="links"><i className="fas fa-phone-volume"></i> Contact <span></span></Link>
			<div className='toggleNavbtn'><i className="fad fa-th"></i></div>
		</div> 
	);
}

export default Paths;