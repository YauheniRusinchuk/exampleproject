import React from 'react';
import './style/style.css';


class LoginForm extends React.Component  {

    render(){
      return(
          <div className='form_input'>
            <span className='title_form'>LOG IN</span>
            <input  className=" st username" type='email' placeholder="Email" />
            <input className="st password" type='password' placeholder="Password" />
            <input  className="form_submit_btn" type='submit' value="Log in" / >
        </div>
      );
    }
}

export default LoginForm;
