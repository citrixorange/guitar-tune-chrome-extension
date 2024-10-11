import React, { useState, useEffect } from 'react';
import { Div, Img } from '../../Base';
import { Triggers } from '../../StateManager';
import close from '../../../images/assets/close.png';
import hovered from '../../../images/assets/hovered-close.png';

const Close = ({ stateManager, setState }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [isHovered]);

    return (
        <Div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Img src={isHovered ? hovered : close} onClick={() => setState({type: Triggers.MAIN})}/>
        </Div>
    );
};
  
export { Close };