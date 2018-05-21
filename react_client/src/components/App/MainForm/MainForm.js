import React, { Component } from 'react';

//redux 
import { connect } from 'react-redux';

//comps
import MainMenuElement from './Menu/MenuElement';


class MainForm extends Component {
    render() {
        switch (this.props.MainField) {      
            case "ai" :
                return (
                    <div className = "MainAIField">
                        AI
                    </div>
                );
                break;
            case "champ" : 
                return (
                    <div className = "MainChampField">
                        Champ
                    </div>
                );
                break;
            case "duel" :
                return (
                    <div className = "MainDuelField">
                        Duel
                    </div>
                );
                break;
            case "stats" :
                return (
                    <div className = "MainStatField">
                        Stat
                    </div>
                );
                break;
            default :
                return (
                    <div className = "MainPage" >
                        MAIN {this.props.MainUserId}
                        <MainMenuElement 
                            MenuElementName = "AI" 
                            MenuElementID = "0"
                            MenuElementPath ="ai"
                            />
                        <MainMenuElement 
                            MenuElementName = "Champs" 
                            MenuElementID = "1"
                            MenuElementPath ="champ"/>
                        <MainMenuElement 
                            MenuElementName = "Duel" 
                            MenuElementID = "2"
                            MenuElementPath ="duel"/>
                        <MainMenuElement 
                            MenuElementName = "Stats"
                            MenuElementID = "3"
                            MenuElementPath ="stats"/>
                        <MainMenuElement 
                            MenuElementName = "LogOut"
                            MenuElementID = "4"/>
                    </div>
                );
                break;
        }
       
    }
}

const mapState = (state) => {
    return {
        MainUserId : state.curUserId,
        MainField : state.curField
    }
};


export default connect(mapState)(MainForm);