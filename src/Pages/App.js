import React, { useState, useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { stateMachine, States } from '../StateManager';
import { Div } from '../Base';
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
            <Div>
                <Main stateManager={stateManager} setState={setState}/>
            </Div>
        )
    } else if (stateManager.value == States.MENU) {
        return (
            <Div>
                <Menu stateManager={stateManager} setState={setState}/>
            </Div>
        )
    } else if (stateManager.value == States.ABOUT) {
        return (
            <Div>
                <About stateManager={stateManager} setState={setState}/>
            </Div>
        )
    } else if (stateManager.value == States.VERSION) {
        return (
            <Div>
                <Version stateManager={stateManager} setState={setState}/>
            </Div>
        )
    } else if (stateManager.value == States.CONFIGURATIONS) {
        return (
            <Div>
                <Configurations stateManager={stateManager} setState={setState}/>
            </Div>
        )
    } else if (stateManager.value == States.TUNER) {
        return (
            <Div>
                <Tuner stateManager={stateManager} setState={setState}/>
            </Div>
        )
    }
};
  
export { App };