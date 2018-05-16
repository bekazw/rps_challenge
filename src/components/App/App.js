import React, { Component } from 'react';
import './App.css';

//components
import LogIn from './LoginForm/LoginIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogIn />
      </div>
    );
  }
}

export default App;
