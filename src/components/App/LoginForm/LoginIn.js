import React, {Component} from 'react';
import './LoginForm.css';


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
    tryToLogIn = () =>{
        fetch("http://localhost:1000/auth/"+this.state.curLogin+"/"+this.state.curPass+"")   
        .then(function(response) {
          return response.json()
        }).then(function(json) {
            console.dir(json);
          if (json !== 404) {  
             console.log("Welcome")          
            }
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })   
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
                    onClick = {this.tryToLogIn}
                    >
                    LogIn
                </button>  
                <button 
                    type="submit" 
                    className="btn btn-warning" 
                    id = "RegBut">
                    Registration
                </button>               
            </div>
        )
    }
}

export default ComLogIn;

//<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>