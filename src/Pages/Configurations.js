import React, { useState, useEffect } from 'react';
import { Header, Footer, Ads } from '../Components';
import { Switch } from '../Components/Buttons';
import { Title } from '../Components/Texts';
import { Option } from '../Components/Buttons';
import { Triggers } from '../StateManager';
import '../css/Main.css';
import '../css/Switch.css';

const Configurations = ({ stateManager, setState }) => {

    return (
        <div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='Configurations'/>
            <div className='switch-group'>
                <Option description='Detection' stateManager={stateManager} setState={setState} trigger={Triggers.DETECTION}/>
                <Option description='Frequency' stateManager={stateManager} setState={setState} trigger={Triggers.FREQUENCY}/>
            </div>
            <Ads/>
            <Footer/>
        </div>
    );
};
  
export { Configurations };