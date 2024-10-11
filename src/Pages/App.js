import React, { useState, useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { stateMachine, States } from '../StateManager';
import { 
    Main, 
    Menu, 
    About, 
    Version, 
    Configurations,
    Tuner 
} from './index.js';


const App = () => {
    const [ stateManager, setState ] = useMachine(stateMachine);

    useEffect(() => {

    }, [stateManager]);

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
                <Configurations stateManager={stateManager} setState={setState}/>
            </div>
        )
    } else if (stateManager.value == States.TUNER) {
        return (
            <div>
                <Tuner stateManager={stateManager} setState={setState}/>
            </div>
        )
    }
};
  
export { App };