import React, { useState, useEffect } from 'react';
import '../../css/Title.css';

const Title = ({ title }) => {
    return (
        <div>
            <div className='title'>
                {title}
            </div>
        </div>
    );
};
  
export { Title };