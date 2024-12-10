import React, { useState, useEffect } from 'react';
import { Header, Footer, Ads } from '../Components';
import { Title, Version as VersionText } from '../Components/Texts';
import '../css/Main.css';

const Version = ({ stateManager, setState }) => {
    return (
        <div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='Version'/>
            <VersionText/>
            <Ads/>
            <Footer/>
        </div>
    );
};
  
export { Version };