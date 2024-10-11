import React, { useState, useEffect } from 'react';
import '../../css/Tuner.css';

const Note = ({note}) => {
    return (
        <div>
            <div className='tuner-note'>
                {note}
            </div>
        </div>
    );
};
  
export { Note };