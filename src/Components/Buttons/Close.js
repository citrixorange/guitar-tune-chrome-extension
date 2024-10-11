import React, { useState, useEffect } from 'react';
import { Triggers } from '../../StateManager';
import close from '../../../images/assets/close.png';
import hovered from '../../../images/assets/hovered-close.png';

const Close = ({ stateManager, setState }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [isHovered]);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={isHovered ? hovered : close} onClick={() => setState({type: Triggers.MAIN})}/>
        </div>
    );
};
  
export { Close };