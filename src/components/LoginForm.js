import React from 'react';
import './style/style.css';
import {auth} from '../config/index';



class LoginForm extends React.Component  {

    state = {
      email: '',
      password: ''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    addFireBase = (email,password) => {
      const promise = auth.signInWithEmailAndPassword(email,password);
      promise.catch((err) => {console.log(err.message)})
    }


    handleSubmit = (e) => {
      e.preventDefault();
      const {email,password} = this.state;
      console.log('email', email);
      console.log('password', password)
      this.addFireBase(email,password)
      this.setState({email: '', password: ''})
    }

    render(){
      return(
          <form className="form" onSubmit={this.handleSubmit}>
          <div className='form_input'>
            <span className='title_form'>LOG IN</span>
            <input
                className=" st username"
                type='email'
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />

            <input
                className="st password"
                type='password'
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
            <input  className="form_submit_btn" type='submit' value="LOG IN" / >
        </div>
        </form>
      )
    }
}

export default LoginForm;
