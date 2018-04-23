import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';



class App extends Component {

  state = {
    auth: false
  }


  render() {

    const body = this.state.auth ? <h2> You are auth  </h2> : <LoginForm />

    return (
      <div>
        {body}
      </div>
    );
  }
}

export default App;
