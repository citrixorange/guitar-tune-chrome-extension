import React, { useState, useEffect } from 'react';
import { Header, Footer, Ads } from '../Components';
import { Option } from '../Components/Buttons';
import { Title } from '../Components/Texts';
import { Triggers } from '../StateManager';
import '../css/Main.css';
import '../css/Button.css';

const Menu = ({ stateManager, setState }) => {
    return (
        <div className="background">
            <Header icon='close' stateManager={stateManager} setState={setState}/>
            <Title title='Menu'/>
            <div className='buttons'>
                <Option description='Configurations' stateManager={stateManager} setState={setState} trigger={Triggers.CONFIGURATIONS}/>
                <Option description='About' stateManager={stateManager} setState={setState} trigger={Triggers.ABOUT}/>
                <Option description='Version' stateManager={stateManager} setState={setState} trigger={Triggers.VERSION}/>
            </div>
            <Ads/>
            <Footer/>
        </div>
    );
};
  
export { Menu };