import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../Components';
import { Option } from '../Components/Buttons';
import { Title } from '../Components/Texts';
import { Triggers } from '../StateManager';
import { Div } from '../Base';
import '../css/Main.css';
import '../css/Button.css';

const Menu = ({ stateManager, setState }) => {
    return (
        <Div className="background">
            <Header icon='close' stateManager={stateManager} setState={setState}/>
            <Title title='Menu'/>
            <Div className='buttons'>
                <Option description='Configurations' stateManager={stateManager} setState={setState} trigger={Triggers.CONFIGURATIONS}/>
                <Option description='About' stateManager={stateManager} setState={setState} trigger={Triggers.ABOUT}/>
                <Option description='Version' stateManager={stateManager} setState={setState} trigger={Triggers.VERSION}/>
            </Div>
            <Footer/>
        </Div>
    );
};
  
export { Menu };