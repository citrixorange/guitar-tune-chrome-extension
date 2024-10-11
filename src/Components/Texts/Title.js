import React, { useState, useEffect } from 'react';
import { Div } from '../../Base';
import '../../css/Title.css';

const Title = ({ title }) => {
    return (
        <Div>
            <Div className='title'>
                {title}
            </Div>
        </Div>
    );
};
  
export { Title };