import { createMachine } from 'xstate';
import { States } from './states.js';

const stateMachine = createMachine({
    id: 'guitar-tune-state-manager',
    initial: States.MAIN,
    states: {
        MAIN: {
            on: {
                goToMenu: States.MENU,
                goToTuner: States.TUNER
            }
        },
        MENU: {
            on: {
                goToMain: States.MAIN,
                goToConfigurations: States.CONFIGURATIONS,
                goToAbout: States.ABOUT,
                goToVersion: States.VERSION
            }
        },
        CONFIGURATIONS: {
            on: {
                goToMenu: States.MENU
            }
        },
        ABOUT: {
            on: {
                goToMenu: States.MENU
            }
        },
        VERSION: {
            on: {
                goToMenu: States.MENU
            }
        },
        TUNER: {
            on: {
                goToMenu: States.MENU
            }
        }
    }
});

export {
    stateMachine
};
