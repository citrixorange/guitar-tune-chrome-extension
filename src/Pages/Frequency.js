import React, { useState, useEffect } from 'react';
import { Header, Footer, Ads } from '../Components';
import { Title } from '../Components/Texts';
import { ToggleSwitch } from '../Components/Buttons';
import '../css/Main.css';

const Frequency = ({ stateManager, setState, setConfig }) => {

    const [showFreq, setShowFreq] = useState(false);

    const handleShowFreqChange = () => {
        setShowFreq(prevState => !prevState)
    };

    useEffect(() => {
        setConfig(prevConfig => ({
            ...prevConfig,
            ["Show Frequency"]: showFreq
        }))
    }, [showFreq]);

    return (
        <div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='Frequency'/>
            <div className='switch-group'>
                <ToggleSwitch label="Show Frequency" isOn={showFreq} handleToggle={handleShowFreqChange} />
            </div>
            <Ads/>
            <Footer/>
        </div>
    );
};
  
export { Frequency };