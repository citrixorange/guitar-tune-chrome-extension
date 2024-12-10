import React, { useState, useEffect } from 'react';
import right from '../../../images/assets/right.png';
import hovered from '../../../images/assets/hovered-right.png';
import '../../css/Switch.css';

const RightSwitch = ({description, setOption, idx, setIdx, options, setConfig}) => {
    const [isFirstClick, setFirstClick] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

    }, [isFirstClick, isHovered]);

    if (isFirstClick) {
        return (
            <div 
                className='right-switch'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    setOption(`${options[idx]}`)
                    setConfig(prevConfig => ({
                        ...prevConfig,
                        [description]: options[idx]
                    }))
                    setFirstClick(false)
                }}
            >   
                <img src={isHovered ? hovered : right}/>
            </div>
        );
    } else {
        return (
            <div 
                className='right-switch'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    if(idx == options.length-1) {
                        setIdx(0)
                        setOption(`${options[0]}`)
                        setConfig(prevConfig => ({
                            ...prevConfig,
                            [description]: options[0]
                        }))
                    } else {
                        setIdx(idx+1)
                        setOption(`${options[idx+1]}`)
                        setConfig(prevConfig => ({
                            ...prevConfig,
                            [description]: options[idx+1]
                        }))
                    }
                }}
            >   
                <img src={isHovered ? hovered : right}/>
            </div>
        );
    }
};
  
export { RightSwitch };