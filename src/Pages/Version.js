import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../Components';
import { Title, Version as VersionText } from '../Components/Texts';
import { Div } from '../Base';
import '../css/Main.css';

const Version = ({ stateManager, setState }) => {
    return (
        <Div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='Version'/>
            <VersionText/>
            <Footer/>
        </Div>
    );
};
  
export { Version };