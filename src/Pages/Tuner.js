import React, { useState, useEffect } from 'react';
import { Header, Footer, Ads } from '../Components';
import { Title } from '../Components/Texts';
import { Note } from '../Components/Texts/Note';
import { Scale } from '../Components/Scale';

const Tuner = ({ stateManager, setState, note, displayFreq }) => {

    return (
        <div className="background">
            <Header icon='hamburguer' stateManager={stateManager} setState={setState}/>
            <Title title='Guitar Tuner'/>
            <Note note={note} displayFreq={displayFreq}/>
            <Scale degree={note}/>
            <Ads/>
            <Footer/>
        </div>
    );
};
  
export { Tuner };