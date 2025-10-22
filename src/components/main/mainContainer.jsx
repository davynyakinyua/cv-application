import React from "react";
import Info from './info';
import './mainContainer.css'
import Education from './education'
import Experience from './experience'
import Buttons from './buttons'
import Summary from './summary'





function MainComponent (){
    return (
        <div className="main-container">
            <form method="post" >
                <Info />
                <Summary />
                <Education />
                <Experience />
                <Buttons />

            </form>

            <div className="display">

            </div>
        </div>
    );
}


export default MainComponent