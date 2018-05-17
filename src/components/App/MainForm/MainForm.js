import React, { Component } from 'react';

//redux 
import { connect } from 'react-redux';


class MainForm extends Component {
    render() {
        return (
            <div className = "MainPage" >
                MAIN {this.props.MainUserId}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        MainUserId : state.curUserId
    }
};

export default connect(mapState)(MainForm);