import React, { useState, useEffect } from 'react';
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
            <div 
                className='left-switch'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    setOption(options[idx])
                    setFirstClick(false)
                }}
            >   
                <img src={isHovered ? hovered : left}/>
            </div>
        );
    } else {
        return (
            <div 
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
                <img src={isHovered ? hovered : left}/>
            </div>
        );
    }
};
  
export { LeftSwitch };