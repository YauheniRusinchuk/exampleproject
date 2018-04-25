import React from 'react';
import LoginForm from './LoginForm';
import SigninForm from './SigninForm';


class Homepage extends React.Component {

  state = {
    isLogin: true,
    isSign: false
  }

  handleLogin = () => {
    this.setState({
      isLogin: true,
      isSign: false,
    })
  }

  handleSignin = () => {
    this.setState({
      isLogin: false,
      isSign: true
    })
  }

  render(){
    const login = this.state.isLogin ? <LoginForm /> : <SigninForm />
    return (
      <div className='loginform'>
          <div className='wrapper'>
                <p className="form_title"> Hi, I think that I can help you  </p>
                <div className='lgandsg'>
                  <span onClick={this.handleLogin}>LOG IN</span>
                  <span onClick={this.handleSignin}>SIGN IN</span>
                </div>
                {login}
          </div>
      </div>

    );
  }
}
export default Homepage;
