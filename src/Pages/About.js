import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../Components';
import { Title, About as AboutText } from '../Components/Texts';
import { Div } from '../Base';
import '../css/Main.css';

const About = ({ stateManager, setState }) => {
    return (
        <Div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='About'/>
            <AboutText/>
            <Footer/>
        </Div>
    );
};
  
export { About };