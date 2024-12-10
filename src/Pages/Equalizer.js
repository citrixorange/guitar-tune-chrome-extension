import React, { useState, useEffect } from 'react';
import { Header, Footer, Ads } from '../Components';
import { Title } from '../Components/Texts';
import { Slider } from '../Components/Sliders'
import '../css/Main.css';

const Equalizer = ({ stateManager, setState, setConfig }) => {

    const [lowCutFreq, setLowCutFreq] = useState(200);
    const [highCutFreq, setHighCutFreq] = useState(2000);
    const [gain, setGain] = useState(1);

    const handleLowCutChange = (e) => {
        const value = parseFloat(e.target.value);
        setLowCutFreq(value);
        setConfig(prevConfig => ({
            ...prevConfig,
            ["LowCutOffFreq"]: value
        }))
    };

    const handleHighCutChange = (e) => {
        const value = parseFloat(e.target.value);
        setHighCutFreq(value);
        setConfig(prevConfig => ({
            ...prevConfig,
            ["HighCutOffFreq"]: value
        }))
    };

    const handleGainChange = (e) => {
        const value = parseFloat(e.target.value);
        setGain(value);
        setConfig(prevConfig => ({
            ...prevConfig,
            ["Gain"]: value
        }))
    };

    return (
        <div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='Equalizer'/>
            <div className='switch-group'>
                <Slider label="Low" min={20} max={500} step={1} value={lowCutFreq} onChange={handleLowCutChange} />
                <Slider label="Medium" min={0.1} max={5} step={0.1} value={gain} onChange={handleGainChange} />
                <Slider label="High" min={200} max={5000} step={1} value={highCutFreq} onChange={handleHighCutChange} />
            </div>
            <Ads/>
            <Footer/>
        </div>
    );
};
  
export { Equalizer };