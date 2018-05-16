import React, {Component} from 'react';

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
            <div className = "LogInForm">
                <input 
                    type = "email"
                    className = "LogInLogin"
                />
                <input 
                    type = "password"
                    className = "LogInPass"
                />
                <button 
                    className = "LogInBut"
                >
                LogIn
                </button>    
            </div>
        )
    }
}

export default ComLogIn;