import React, { useState, useEffect } from 'react';
import { Triggers } from '../../StateManager';
import back from '../../../images/assets/back.png';
import hovered from '../../../images/assets/hovered-back.png';

const Back = ({ stateManager, setState }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [isHovered]);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={isHovered ? hovered : back} onClick={() => setState({type: Triggers.MENU})}/>
        </div>
    );
};
  
export { Back };