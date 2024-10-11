import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../Components';
import { Switch } from '../Components/Buttons';
import { Title } from '../Components/Texts';
import { Div } from '../Base';
import '../css/Main.css';
import '../css/Switch.css';

const Configurations = ({ stateManager, setState }) => {
    return (
        <Div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='Configurations'/>
            <Div className='switch-group'>
                <Switch description='Language' options={['Português', 'English']}/>
                <Switch description='Theme' options={['Modern']}/>
            </Div>
            <Footer/>
        </Div>
    );
};
  
export { Configurations };