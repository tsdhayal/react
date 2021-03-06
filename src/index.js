import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import Paths from "./static/Paths";
import Routers from "./static/Routers";

//import Nav from './static/Nav';
import Defaults from './static/Default';

import Footer from './static/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    
    <Defaults />
    
    <BrowserRouter>
    	<Paths />
    	<Routers />
    </BrowserRouter>

     

  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render( <Footer /> , document.getElementById('footer') );

function Indexes(){
	return(
		<div>Indeses</div>
	)
}
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//ReactDOM.render( <LoginForm />, document.getElementById('static') );
 //<Nav /> 

reportWebVitals();
