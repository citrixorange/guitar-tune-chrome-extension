import React, { useState, useEffect } from 'react';
import { Triggers } from '../../StateManager';
import hamburguer from '../../../images/assets/hamburguer.png';
import hovered from '../../../images/assets/hovered-hamburguer.png';

const Hamburguer = ({ stateManager, setState }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [isHovered]);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={isHovered ? hovered : hamburguer} onClick={() => setState({type: Triggers.MENU})}/>
        </div>
    );
};
  
export { Hamburguer };