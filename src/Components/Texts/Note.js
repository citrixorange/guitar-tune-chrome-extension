import React, { useState, useEffect } from 'react';
import '../../css/Tuner.css';

const Note = ({note}) => {
    if(note) {
        return (
            <div>
                <div className='tuner-note'>
                    {note.note}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className='tuner-note'>
                    {''}
                </div>
            </div>
        );
    }
};
  
export { Note };