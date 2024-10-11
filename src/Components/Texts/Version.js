import React, { useState, useEffect } from 'react';
import { Div } from '../../Base';
import '../../css/Description.css';

const Version = () => {
    return (
        <Div>
            <Div className='version'>
                <Div>
                    v1.0.0
                </Div>
            </Div>
        </Div>
    );
};
  
export { Version };