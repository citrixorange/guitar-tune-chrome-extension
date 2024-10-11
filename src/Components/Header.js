import React, { useState, useEffect } from 'react';
import { 
    Hamburguer,
    Close,
    Back
} from './Buttons';

import '../css/Header.css';

const Header = ({ icon, stateManager, setState }) => {
    if (icon == 'hamburguer') {
        return (
            <div className='header-main'>
                <Hamburguer stateManager={stateManager} setState={setState}/>
            </div>
        );
    } else if (icon == 'back') {
        return (
            <div className='header-menu'>
                <Back stateManager={stateManager} setState={setState}/>
            </div>
        );
    } else if (icon == 'close') {
        return (
            <div className='header-menu'>
                <Close stateManager={stateManager} setState={setState}/>
            </div>
        );
    } else {
        return (
            <div className='header'/>
        );
    }
};
  
export { Header };