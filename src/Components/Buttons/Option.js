import React, { useState, useEffect } from 'react';
import '../../css/Button.css';

const Option = ({ description, stateManager, setState, trigger }) => {
    return (
        <div>
            <button className='button' onClick={() => setState({type: trigger})}>
                {description}
            </button>
        </div>
    );
};
  
export { Option };