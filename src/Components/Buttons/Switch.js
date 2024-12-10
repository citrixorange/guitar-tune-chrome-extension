import React, { useState, useEffect } from 'react';
import { RightSwitch } from './RightSwitch';
import { LeftSwitch } from './LeftSwitch';
import '../../css/Switch.css';

const Switch = ({ description, options, setConfig }) => {

    const [ idx, setIdx ] = useState(0);
    const [ option, setOption ] = useState(description);

    useEffect(() => {

    }, [option, idx]);

    return (
        <div className='switch'>
            <LeftSwitch description={description} setOption={setOption} idx={idx} setIdx={setIdx} options={options} setConfig={setConfig}/>
            <button className='switch-display' disabled={true}>
                {option}
            </button>
            <RightSwitch description={description} setOption={setOption} idx={idx} setIdx={setIdx} options={options} setConfig={setConfig}/>
        </div>
    );
};
  
export { Switch };