import React, { useState, useEffect } from 'react';
import '../../css/Tuner.css';

const Note = ({note, displayFreq}) => {

    let freq = '';

    if(note) {
        
        if(displayFreq['Show Frequency'] == true) {
            freq = `${parseFloat(note.value.toFixed(1))} Hz`;
        }

        return (
            <div>
                <div className='tuner-note'>
                    {note.note}
                </div>
                <div className='tuner-freq'>
                    {freq}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className='tuner-note'>
                    {''}
                </div>
                <div className='tuner-freq'>
                    {''}
                </div>
            </div>
        );
    }
};
  
export { Note };