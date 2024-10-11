import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../Components';
import { Tune } from '../Components/Buttons';
import { Title } from '../Components/Texts';
import { Div } from '../Base';
import '../css/Main.css';

const Main = ({ stateManager, setState }) => {
    return (
        <Div className="background">
            <Header icon='hamburguer' stateManager={stateManager} setState={setState}/>
            <Title title='Guitar Tune'/>
            <Tune stateManager={stateManager} setState={setState}/>
            <Footer/>
        </Div>
    );
};
  
export { Main };