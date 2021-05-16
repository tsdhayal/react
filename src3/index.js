import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./dashboard/Header";
import ComponentBoot from './dashboard/ComponentBoot';
import Boots1 from "./dashboard/Boots1";

ReactDOM.render(
  <React.StrictMode>
    <Indexes />
    <Boots1 />
    
  </React.StrictMode>,
  document.getElementById('root')
);


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


