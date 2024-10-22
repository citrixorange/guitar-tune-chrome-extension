import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../Components';
import { Title } from '../Components/Texts';
import { Note } from '../Components/Texts/Note';
import { Scale } from '../Components/Scale';
import { setupAudio } from '../Audio/js/Setup';

const Tuner = ({ stateManager, setState }) => {

    const [audio, setAudio] = useState(undefined);
    const [note, setNote] = useState(undefined);
    const [degree, setDegree] = useState(-45);
    const [increase, setIncrease] = useState(true);

    useEffect(() => {
        const loadAudio = async () => {
            const setup = await setupAudio(setNote);
            setAudio(setup)
        }
        loadAudio();
    }, []);

    return (
        <div className="background">
            <Header icon='hamburguer' stateManager={stateManager} setState={setState}/>
            <Title title='Guitar Tuner'/>
            <Note note={note}/>
            <Scale degree={note}/>
            <Footer/>
        </div>
    );
};
  
export { Tuner };