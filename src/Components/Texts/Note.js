import React, { useState, useEffect } from 'react';
import { Div } from '../../Base';
import '../../css/Tuner.css';

const Note = ({note}) => {
    return (
        <Div>
            <Div className='tuner-note'>
                {note}
            </Div>
        </Div>
    );
};
  
export { Note };