import React, { useState, useEffect } from 'react';
import { RightSwitch } from './RightSwitch';
import { LeftSwitch } from './LeftSwitch';
import '../../css/Switch.css';

const Switch = ({ description, options }) => {

    const [ idx, setIdx ] = useState(0);
    const [ option, setOption ] = useState(description);

    useEffect(() => {

    }, [option, idx]);

    return (
        <div className='switch'>
            <LeftSwitch setOption={setOption} idx={idx} setIdx={setIdx} options={options}/>
            <button className='switch-display' disabled={true}>
                {option}
            </button>
            <RightSwitch setOption={setOption} idx={idx} setIdx={setIdx} options={options}/>
        </div>
    );
};
  
export { Switch };