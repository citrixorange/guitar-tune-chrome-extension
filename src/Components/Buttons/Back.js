import React, { useState, useEffect } from 'react';
import { Div, Img } from '../../Base';
import { Triggers } from '../../StateManager';
import back from '../../../images/assets/back.png';
import hovered from '../../../images/assets/hovered-back.png';

const Back = ({ stateManager, setState }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [isHovered]);

    return (
        <Div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Img src={isHovered ? hovered : back} onClick={() => setState({type: Triggers.MENU})}/>
        </Div>
    );
};
  
export { Back };