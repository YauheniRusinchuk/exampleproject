import React from 'react';


class SigninForm extends React.Component {
  render(){
    return(
      <div className='form_input'>
        <span className="title_form">SIGN IN</span>
        <input  className=" st username" type='email' placeholder="Email" />
        <input className="st password" type='password' placeholder="Password" />
        <input  className="form_submit_btn" type='submit' value="SIGN IN" / >
    </div>
    );
  }
}

export default SigninForm;
