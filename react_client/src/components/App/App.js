import React from 'react';
import './App.css';

//components
import LogIn from './LoginForm/LoginIn';
import Main from './MainForm/MainForm';
import RegForm from './RegForm/RegForm';
//redux
import { connect } from 'react-redux';

const App = (AppCurPage) =>{
    
      switch (AppCurPage.AppCurPage) {
        case "/auth" :
          return (
            <div className="App">
              <LogIn />
            </div>
          );       
        case "/main" :
          return (
            <div className="App">
              <Main />
            </div>
          );
        case "/reg" : 
          return (
            <div className = "App">
              <RegForm />
            </div> 
          )
        default :
          return (
            <div className="App">
              <LogIn />
            </div>
          )  
      }   
}


const mapStateToProps = (state) => ({
  AppCurPage : state.curPage
})

export default connect(mapStateToProps)(App);
