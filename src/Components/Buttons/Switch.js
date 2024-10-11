import React, { useState, useEffect } from 'react';
import { RightSwitch } from './RightSwitch';
import { LeftSwitch } from './LeftSwitch';
import { Div, Button } from '../../Base';
import '../../css/Switch.css';

const Switch = ({ description, options }) => {

    const [ idx, setIdx ] = useState(0);
    const [ option, setOption ] = useState(description);

    useEffect(() => {

    }, [option, idx]);

    return (
        <Div className='switch'>
            <LeftSwitch setOption={setOption} idx={idx} setIdx={setIdx} options={options}/>
            <Button className='switch-display' disabled={true}>
                {option}
            </Button>
            <RightSwitch setOption={setOption} idx={idx} setIdx={setIdx} options={options}/>
        </Div>
    );
};
  
export { Switch };