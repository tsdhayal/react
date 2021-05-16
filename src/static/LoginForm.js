import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {value: ''};
    this.state = {
        lemail : "",
        lpassword : "",
        lselects : "",
        ltextarea : "",
        lphone : "",
        lgender:'',
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.passwordHandelChange = this.passwordHandelChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleChangeMassage = this.handleChangeMassage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.commanChangeHandler = this.commanChangeHandler.bind(this);

  }

  handleChange(event) {
    this.setState({lemail: event.target.value});
  }
  passwordHandelChange(event){
    this.setState({lpassword: event.target.value})
  }
  handleSelectChange(e){
    this.setState({lselects: e.target.value})
  }
  handleChangeMassage(e){
    this.setState({ltextarea: e.target.value})
  }
  commanChangeHandler(e){
    let nam = e.target.name;
    let val = e.target.value;
    if(nam === "lphone"){
      if(!Number(val)){
        var errors = "Please enter the Number only"
        // this error can not accept in render()
      }
      if(val.length >= 11){
        var errors = "accept Only 10 degits only"
      }
    }
    this.setState({[nam]:val})
  }
  handleSubmit(event) {
    alert( `Email: ${this.state.lemail} ,
            Password : ${this.state.lpassword} , 
            Selelct : ${this.state.lselects} , 
            Textarea : ${this.state.ltextarea},
            Phone : ${this.state.lphone},
            Gender : ${this.state.lgender} `);
    
    event.preventDefault();

    let datass = new FormData(this);

    console.log(datass)

    let datas = { email:this.state.lemail,
                  password:this.state.lpassword,
                  selects:this.state.lselects,
                  texts:this.state.ltextarea,
                  phone:this.state.lphone,
                  gender:this.state.lgender }

    fetch('../server/insert.php', {
      method :'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(datas)
    }).then( function(result){
       result.json().then( (respnse) => {
          console.log(respnse)
       })
    }).then( (error) => {
      console.log(error);
    }).finaly( function(){
       console.log( ' filanly called from login from statics ')
    })

  }
  
  render() {
    
    const inputbtn = {
      width:100+'px',
      color:'red',
      cursor:'pointer'
    };
    const btndiv ={
      textAlign:"center"
    };
    const textareas ={
        width:100+'%',
        padding:10+'px',
        outline:'none',
        border:'none',
        borderRadius:4+'px',
        fontSize:1.3+'em'
    }
    let error = {
      width:100+'%',
      padding:10+'px',
      borderRadius:4+'px',
      background:'#F5B7B1',
      color:'#E74C3C',
      display:'none',
    }
    let errors = "";

    if(!Number(this.state.lphone)){
       errors += "Accept Only Number Digits";
       error.display = 'block';
    }
    if((this.state.lphone).length <= 10 || (this.state.lphone).length > 11){
      errors += " Minium lenth 10 and max lenth is 11 "
      error.display = 'block';
    }
    if(this.state.lphone == ""){
      error.display = 'none'
    }


    return (
      <div className='loginform'>
      <form onSubmit={this.handleSubmit}>
          <div className='formheader'><h4>Login Form </h4></div>
          <div style={error}>{errors}</div>
          <div><label>Email : </label></div>
          <div><input type="email" value={this.state.value} onChange={this.handleChange} placeholder='Email' name='lemail' id='lemail'/></div>
          <div><label>Password : </label></div>
          <div><input type="password" value={this.state.value} onChange={this.passwordHandelChange}  placeholder="Password" name='lpassword' id='lpassword' /></div>
          <div><label>User Type : </label></div>
          <div>
              <select value={this.state.value} onChange={this.handleSelectChange} id='lselects' name='lselects'>
                <option value='' style={{color:'lightgray'}}>Please Select User Type </option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
          </div>
          <div><label>Gender : </label></div>
          <div>
              <select value={this.state.value} onChange={this.commanChangeHandler} id='lgender' name='lgender'>
                <option value='' style={{color:'lightgray'}}>Please Select Gender </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
          </div>
          <div><label>Phone : </label></div>
          <div><input type="tel" value={this.state.value} onChange={this.commanChangeHandler} id='lphone' name='lphone' placeholder='Phone No'  /></div>
          <div><label>Message : </label></div>
          <div><textarea value={this.state.value} onChange={this.handleChangeMassage} style={textareas} placeholder="Message" id='ltextarea' name='ltextarea' /></div>
          <div style={btndiv}><input type="submit" value="Submit"  style={inputbtn}/></div>
      </form>
      </div>
    );
  }
}


export default LoginForm;
