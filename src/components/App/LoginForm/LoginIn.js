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

    render() {
        return (
            <div className="LoginForm">      
                      
                <div class="form-group">                
                    <label for="LogInLogin">
                       Email address
                    </label>                    
                    <input 
                        type="email" 
                        class="form-control LogInInput" 
                        id="LogInLogin"
                        aria-describedby="emailHelp" 
                        required 
                        name = "LogInLogin"
                        placeholder="Enter email"                                   
                    />
                    
                </div>
                <div class="form-group">
                    <label 
                        for="LogInPass">
                        Password
                    </label>
                    <input 
                        type="password" 
                        class="form-control LogInInput" 
                        id="LogInPass" 
                        placeholder="Password"
                        required
                        name = "LogInPass" 
                    />
                </div>               
                <button 
                    type="submit" 
                    class="btn btn-primary"
                    id = "LogBut">
                    LogIn
                </button>  
                <button 
                    type="submit" 
                    class="btn btn-warning" 
                    id = "RegBut">
                    Registration
                </button>               
            </div>
        )
    }
}

export default ComLogIn;

//<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>