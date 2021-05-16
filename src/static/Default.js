
import "./Default.css";


function Defaults() {
	const varibleName = {
		backgroundColor:'#F39C12',
		color:'white',
		width:150+'px'
	}
	function callbackf(){
		alert("First Way to style is called and Callback function")
	}
	return(
		
		<div className="defaults">
			<button style={{backgroundColor:'gray',color:"white"}} onClick={callbackf}> Style </button>
			<button style={varibleName} onClick={() => alert("Hi Style Varibles is Called")}> Style Variable </button>
			<button className="btn-primary">Bootstrap </button>
		</div>
	)
	
}

export default Defaults;

// file name shold be captiatl latter
// className value can be somal or captiatl
// out side of src file not accpeted
// exprot only from another files function or class name
//