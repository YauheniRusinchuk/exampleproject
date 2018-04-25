import React from 'react';
import {auth} from '../config/index';

class SigninForm extends React.Component {

  state = {
    email: '',
    password: ''

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addNewUser = (email,password) => {
    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise.then(()=>{console.log("COMPLITE")})
           .catch((err)=>{console.log(err.message,"ERORORR")})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {email,password} = this.state;
    this.addNewUser(email,password);
    this.setState({email:'',password:''})
  }

  render(){
    return(
      <form className="form" onSubmit={this.handleSubmit}>
      <div className='form_input'>
        <span className="title_form">SIGN IN</span>
        <input
          className=" st username"
          type='email'
          placeholder="Email"
          name = "email"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          className="st password"
          type='password'
          placeholder="Password"
          name = "password"
          value={this.state.password}
          onChange={this.handleChange}
          />
        <input  className="form_submit_btn" type='submit' value="SIGN IN" / >
    </div>
    </form>
    );
  }
}

export default SigninForm;
