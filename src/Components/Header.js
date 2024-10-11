import React, { useState, useEffect } from 'react';
import { 
    Hamburguer,
    Close,
    Back
} from './Buttons';
import { Div } from '../Base';

import '../css/Header.css';

const Header = ({ icon, stateManager, setState }) => {
    if (icon == 'hamburguer') {
        return (
            <Div className='header-main'>
                <Hamburguer stateManager={stateManager} setState={setState}/>
            </Div>
        );
    } else if (icon == 'back') {
        return (
            <Div className='header-menu'>
                <Back stateManager={stateManager} setState={setState}/>
            </Div>
        );
    } else if (icon == 'close') {
        return (
            <Div className='header-menu'>
                <Close stateManager={stateManager} setState={setState}/>
            </Div>
        );
    } else {
        return (
            <Div className='header'/>
        );
    }
};
  
export { Header };