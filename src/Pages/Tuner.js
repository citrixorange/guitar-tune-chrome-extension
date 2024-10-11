import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../Components';
import { Title } from '../Components/Texts';
import { Note } from '../Components/Texts/Note';
import { Scale } from '../Components/Scale';

const Tuner = ({ stateManager, setState }) => {

    const [degree, setDegree] = useState(-45);
    const [increase, setIncrease] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            if(degree == -45) {
                setIncrease(true);
                setDegree(degree+1)
            } else if(degree == 45) {
                setIncrease(false);
                setDegree(degree-1)
            } else {
                if(increase == true) {
                    setDegree(degree+1)
                } else {
                    setDegree(degree-1)
                }
            }
        }, 10);
        return () => clearTimeout(timer); 
    }, [degree]);

    return (
        <div className="background">
            <Header icon='hamburguer' stateManager={stateManager} setState={setState}/>
            <Title title='Guitar Tuner'/>
            <Note note='G'/>
            <Scale degree={degree}/>
            <Footer/>
        </div>
    );
};
  
export { Tuner };