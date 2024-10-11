import React, { useState, useEffect } from 'react';
import '../../css/Description.css';

const About = () => {
    return (
        <div>
            <div className='description'>
                <div className='highlight-word-top'>
                    Guitar Tune 
                </div>
                <div>
                    {` has been developed for free`}
                </div>
                <div>
                    {`use.\n\nIt has been released by Lobo Guará - Softwares Brasileiros under GNU License as a completelly Open Source Software.\n\nIf you are interested to contributed on new versions of Guitar Tune, checkout our github page at `}
                </div>
                <div className='highlight-word-bottom'>
                    https://github.com/citrixorange
                </div>
            </div>
        </div>
    );
};
  
export { About };