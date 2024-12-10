import React, { useState, useEffect } from 'react';
import { Header, Footer, Ads } from '../Components';
import { Title } from '../Components/Texts';
import { Slider } from '../Components/Sliders'
import '../css/Main.css';

const Detection = ({ stateManager, setState, setConfig }) => {

    const [power, setPower] = useState(5);
    const [clarity, setClarity] = useState(0.7);

    const handlePowerChange = (e) => {
        const value = parseFloat(e.target.value);
        setPower(value);
        setConfig(prevConfig => ({
            ...prevConfig,
            ["Power"]: value
        }))
    };

    const handleClarityChange = (e) => {
        const value = parseFloat(e.target.value);
        setClarity(value);
        setConfig(prevConfig => ({
            ...prevConfig,
            ["Clarity"]: value
        }))
    };

    return (
        <div className="background">
            <Header icon='back' stateManager={stateManager} setState={setState}/>
            <Title title='Detection'/>
            <div className='switch-group'>
                <Slider label="Power" min={-3} max={8} step={1} value={power} onChange={handlePowerChange} />
                <Slider label="Clarity" min={0} max={1} step={0.01} value={clarity} onChange={handleClarityChange} />
            </div>
            <Ads/>
            <Footer/>
        </div>
    );
};
  
export { Detection };