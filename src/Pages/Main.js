import React, { useState, useEffect } from 'react';
import { Header, Footer, Ads } from '../Components';
import { Tune } from '../Components/Buttons';
import { Title } from '../Components/Texts';
import '../css/Main.css';

const Main = ({ stateManager, setState }) => {
    return (
        <div className="background">
            <Header icon='hamburguer' stateManager={stateManager} setState={setState}/>
            <Title title='Guitar Tune'/>
            <Tune stateManager={stateManager} setState={setState}/>
            <Ads/>
            <Footer/>
        </div>
    );
};
  
export { Main };