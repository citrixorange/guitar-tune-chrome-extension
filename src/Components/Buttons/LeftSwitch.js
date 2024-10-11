import React, { useState, useEffect } from 'react';
import { Div, Img } from '../../Base';
import left from '../../../images/assets/left.png';
import hovered from '../../../images/assets/hovered-left.png';
import '../../css/Switch.css';

const LeftSwitch = ({setOption, idx, setIdx, options}) => {
    const [isFirstClick, setFirstClick] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [isFirstClick, isHovered]);

    if (isFirstClick) {
        return (
            <Div 
                className='left-switch'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    setOption(options[idx])
                    setFirstClick(false)
                }}
            >   
                <Img src={isHovered ? hovered : left}/>
            </Div>
        );
    } else {
        return (
            <Div 
                className='left-switch'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    if(idx == 0) {
                        setIdx(options.length-1)
                        setOption(options[options.length-1])
                    } else {
                        setIdx(idx-1)
                        setOption(options[idx-1])
                    }
                }}
            >   
                <Img src={isHovered ? hovered : left}/>
            </Div>
        );
    }
};
  
export { LeftSwitch };