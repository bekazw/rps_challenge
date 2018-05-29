import React, {Component} from 'react';
import './LoginForm.css';

//redux
import { connect } from 'react-redux';
import LogInAction from '../../../redux/LogAction';
import RegAction from '../../../redux/RegAction';
import UserBase from '../../../redux/userBase.json';

class ComLogIn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            curLogin : "",
            curPass  : ""
        }       
    }

    valueUpdate = (e, who) => {
        if (who === "l") {
            this.setState({
                curLogin : e.target.value
            })
        }
        else {
            this.setState({
                curPass : e.target.value
            })
        }
    }
    tryToLogIn = (el) =>{
      /*  fetch("http://localhost:1000/auth/"+this.state.curLogin+"/"+this.state.curPass+"")   
        .then(function(response) {
          return response.json()
        }).then(function(json) {            
          if (json !== 404) {  
              console.log(json.lid);
              el.props.RTryLogin(json.lid)          
            }
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        }) */
        //local base test
        if (this.state.curLogin === UserBase["u0"]["login"]) {
            if ( this.state.curPass === UserBase["u0"]["pass"]) {
                this.props.RTryLogin();
            }
            else {
                alert("Pass err")
            }
        }
        else {
            alert ("Login err")
        }
    }

    render() {
        return (
            <div className="LoginForm">      
                      
                <div className="form-group">                
                    <label htmlFor="LogInLogin">
                       Email address
                    </label>                    
                    <input 
                        type="email" 
                        className="form-control LogInInput" 
                        id="LogInLogin"
                        aria-describedby="emailHelp" 
                        required 
                        name = "LogInLogin"
                        placeholder="Enter email"      
                        onChange = {e=>this.valueUpdate(e,"l")}                             
                    />
                    
                </div>
                <div className="form-group">
                    <label 
                        htmlFor="LogInPass">
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control LogInInput" 
                        id="LogInPass" 
                        placeholder="Password"
                        required
                        name = "LogInPass" 
                        onChange = {e=>this.valueUpdate(e,"p")}
                    />
                </div>               
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    id = "LogBut"
                    onClick = {()=>{this.tryToLogIn(this)}}
                    >
                    LogIn
                </button>  
                <button 
                    type="submit" 
                    className="btn btn-warning" 
                    id = "RegBut"
                    onClick = {()=>this.props.RRegPage()}>
                    Registration
                </button>               
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        xx : state.curPage
    }
}

const mapDispatch = (dispatch) => {
    return {
        RTryLogin : (id) => {dispatch(LogInAction(id))},
        RRegPage : () => {dispatch(RegAction())}
    }
};

export default connect(mapState, mapDispatch)(ComLogIn);

//<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>