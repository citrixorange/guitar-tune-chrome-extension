import React, { useState, useEffect } from 'react';
import { Div, Img } from '../../Base';
import right from '../../../images/assets/right.png';
import hovered from '../../../images/assets/hovered-right.png';
import '../../css/Switch.css';

const RightSwitch = ({setOption, idx, setIdx, options}) => {
    const [isFirstClick, setFirstClick] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [isFirstClick, isHovered]);

    if (isFirstClick) {
        return (
            <Div 
                className='right-switch'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    setOption(options[idx])
                    setFirstClick(false)
                }}
            >   
                <Img src={isHovered ? hovered : right}/>
            </Div>
        );
    } else {
        return (
            <Div 
                className='right-switch'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    if(idx == options.length-1) {
                        setIdx(0)
                        setOption(options[0])
                    } else {
                        setIdx(idx+1)
                        setOption(options[idx+1])
                    }
                }}
            >   
                <Img src={isHovered ? hovered : right}/>
            </Div>
        );
    }
};
  
export { RightSwitch };