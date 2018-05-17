import React from 'react';

//styles
import './MenuElement.css';

//redux 
import { connect } from 'react-redux';
import Nav from '../../../../redux/NavAction';


const MainMenuElement = props => {
    let x = props.MenuElementPath;
    return (
        <button 
            className = "MainMenuElement"
            id = {"ME"+props.MenuElementID}
            onClick = {()=>{props.Nav(x)}}
            >
            {props.MenuElementName}
        </button>
    )
}

const mapState = state => {
    return {}
}

const mapDispatch = (dispatch) => {
    return {
        Nav : (path) => {dispatch(Nav(path))}
    }
}

export default connect(mapState, mapDispatch)(MainMenuElement);