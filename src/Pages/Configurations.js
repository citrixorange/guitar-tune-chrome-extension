import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../Components';
import { Switch } from '../Components/Buttons';
import { Title } from '../Components/Texts';
import '../css/Main.css';
import '../css/Switch.css';

const Configurations = ({ stateManager, setState }) => {
    return (
        <div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='Configurations'/>
            <div className='switch-group'>
                <Switch description='Language' options={['Português', 'English']}/>
                <Switch description='Theme' options={['Modern']}/>
            </div>
            <Footer/>
        </div>
    );
};
  
export { Configurations };