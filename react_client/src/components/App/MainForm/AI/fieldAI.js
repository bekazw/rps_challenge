import React from 'react';
import UserBar from './bar';

import "./fieldAI.css";

let FAI = () => {
    return (
        <div className="AI">
            AI fight page
            <div id = "AI_mid">
                <div id = "AI_mid_0" className="AI_mid_bar"></div>
                <div id = "AI_mid_1" className="AI_mid_bar"></div>
                <div id = "AI_mid_2" className="AI_mid_bar"></div>
                
                <UserBar />
                <UserBar />
                <UserBar />                
            </div>
        </div>
    )
}

export default FAI;