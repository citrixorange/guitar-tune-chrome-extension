import React, { useState, useEffect } from 'react';
import { Div, Button } from '../../Base';
import '../../css/Button.css';

const Option = ({ description, stateManager, setState, trigger }) => {
    return (
        <Div>
            <Button className='button' onClick={() => setState({type: trigger})}>
                {description}
            </Button>
        </Div>
    );
};
  
export { Option };