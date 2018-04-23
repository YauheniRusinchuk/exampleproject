import React from 'react';
import './style/style.css';


export default  () => (
  <div className='loginform'>
      <div className='wrapper'>
        <form className="form">
            <p className="form_title"> Hi, I think that I can help you  </p>
            <div className='form_input'>
              <input  className=" st username" type='email' placeholder="Email" />
              <input className="st password" type='password' placeholder="Password" />
              <input  className="form_submit_btn" type='submit' value="Log in" / >
            </div>
        </form>
      </div>
  </div>
)
