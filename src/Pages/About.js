import React, { useState, useEffect } from 'react';
import { Header, Footer, Ads } from '../Components';
import { Title, About as AboutText } from '../Components/Texts';
import '../css/Main.css';

const About = ({ stateManager, setState }) => {
    return (
        <div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='About'/>
            <AboutText/>
            <Ads/>
            <Footer/>
        </div>
    );
};
  
export { About };