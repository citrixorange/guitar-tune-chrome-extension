import React, { useState, useEffect } from 'react';
import { Triggers } from '../../StateManager';
import '../../css/TuneButton.css';
import tune_0 from '../../../images/assets/tune_button/tune_button.png';
import tune_1 from '../../../images/assets/tune_button/tune_button_10.png';
import tune_2 from '../../../images/assets/tune_button/tune_button_20.png';
import tune_3 from '../../../images/assets/tune_button/tune_button_30.png';
import tune_4 from '../../../images/assets/tune_button/tune_button_40.png';
import tune_5 from '../../../images/assets/tune_button/tune_button_50.png';
import tune_6 from '../../../images/assets/tune_button/tune_button_60.png';
import tune_7 from '../../../images/assets/tune_button/tune_button_70.png';
import tune_8 from '../../../images/assets/tune_button/tune_button_80.png';
import tune_9 from '../../../images/assets/tune_button/tune_button_90.png';
import tune_10 from '../../../images/assets/tune_button/tune_button_100.png';

const Tune = ({ stateManager, setState }) => {

    const [counter, setCounter] = useState(0);
    const [timerHover, setTimerHover] = useState(undefined);
    const [timerUnhover, setTimerUnhover] = useState(undefined);

    const tunes = [ tune_0, tune_1, tune_2, tune_3, tune_4, tune_5, tune_6, tune_7, tune_8, tune_9, tune_10];
    
    const timerHoverHandler = () => {
        setTimerHover(setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter < 10) {
                    return prevCounter + 1;
                } else {
                    clearInterval(timerHover);
                    return prevCounter; // Return the same value to stop updating
                }
            });
        }, 30));
    };

    const timerUnhoverHandler = () => {
        setTimerUnhover(setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter > 0) {
                    return prevCounter - 1;
                } else {
                    clearInterval(timerUnhover);
                    return prevCounter; // Return the same value to stop updating
                }
            });
        }, 30));
    };

    useEffect(() => {

    }, [counter]);


    return (
        <div className='tune-button'>
            <img 
                src={tunes[counter]}
                
                onClick={() => {
                    setState({type: Triggers.TUNER})}
                }
                
                onMouseEnter={() => {
                    if(timerUnhover) {
                        clearInterval(timerUnhover)
                    }
                    timerHoverHandler();
                }}
                
                onMouseLeave={() => {
                    if(timerHover) {
                        clearInterval(timerHover)
                    }
                    timerUnhoverHandler()
                }} 
            />
        </div>
    );

};
  
export { Tune };