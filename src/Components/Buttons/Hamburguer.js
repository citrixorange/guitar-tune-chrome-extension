import React, { useState, useEffect } from 'react';
import { Div, Img } from '../../Base';
import { Triggers } from '../../StateManager';
import hamburguer from '../../../images/assets/hamburguer.png';
import hovered from '../../../images/assets/hovered-hamburguer.png';

const Hamburguer = ({ stateManager, setState }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [isHovered]);

    return (
        <Div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Img src={isHovered ? hovered : hamburguer} onClick={() => setState({type: Triggers.MENU})}/>
        </Div>
    );
};
  
export { Hamburguer };