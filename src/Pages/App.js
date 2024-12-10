import React, { useState, useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { stateMachine, States } from '../StateManager';
import { setupAudio } from '../Audio/js/Setup';
import { 
    Main, 
    Menu, 
    About, 
    Version, 
    Configurations,
    Tuner,
    Equalizer,
    Detection,
    Frequency
} from './index.js';


const App = () => {

    const [ stateManager, setState ] = useMachine(stateMachine);

    const [audio, setAudio] = useState(undefined);

    const [note, setNote] = useState(undefined);

    const [ displayFreq, setDisplayFreq ] = useState({
        "Show Frequency": false
    });

    const [ config, setConfig ] = useState({
        "Power": 5.0,
        "Clarity": 0.7,
        //"LowCutOffFreq": 200.0,
        //"HighCutOffFreq": 200.0,
        //"Gain": 1.5
    });

    useEffect(() => {

    }, [stateManager, displayFreq]);

    useEffect(() => {
        setupAudio(setNote).then((node) => {
            setAudio(node);
        })
    }, []);

    useEffect(() => {
        if(audio) {
            audio.node.setConfig(config)
        }
    }, [config])

    if (stateManager.value == States.MAIN) {
        return (
            <div>
                <Main stateManager={stateManager} setState={setState}/>
            </div>
        )
    } else if (stateManager.value == States.MENU) {
        return (
            <div>
                <Menu stateManager={stateManager} setState={setState}/>
            </div>
        )
    } else if (stateManager.value == States.ABOUT) {
        return (
            <div>
                <About stateManager={stateManager} setState={setState}/>
            </div>
        )
    } else if (stateManager.value == States.VERSION) {
        return (
            <div>
                <Version stateManager={stateManager} setState={setState}/>
            </div>
        )
    } else if (stateManager.value == States.CONFIGURATIONS) {
        return (
            <div>
                <Configurations stateManager={stateManager} setState={setState} setConfig={setConfig} setDisplayFreq={setDisplayFreq}/>
            </div>
        )
    } else if (stateManager.value == States.TUNER) {
        return (
            <div>
                <Tuner stateManager={stateManager} setState={setState} note={note} displayFreq={displayFreq}/>
            </div>
        )
    } else if(stateManager.value == States.EQUALIZER) {
        return (
            <div>
                <Equalizer stateManager={stateManager} setState={setState} setConfig={setConfig}/>
            </div>
        )
    } else if(stateManager.value == States.DETECTION) {
        return (
            <div>
                <Detection stateManager={stateManager} setState={setState} setConfig={setConfig}/>
            </div>
        )
    } else if(stateManager.value == States.FREQUENCY) {
        return (
            <div>
                <Frequency stateManager={stateManager} setState={setState} setConfig={setDisplayFreq}/>
            </div>
        )
    }
};
  
export { App };