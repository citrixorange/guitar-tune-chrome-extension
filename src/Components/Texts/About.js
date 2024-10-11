import React, { useState, useEffect } from 'react';
import { Div } from '../../Base';
import '../../css/Description.css';

const About = () => {
    return (
        <Div>
            <Div className='description'>
                <Div className='highlight-word-top'>
                    Guitar Tune 
                </Div>
                <Div>
                    {` has been developed for free`}
                </Div>
                <Div>
                    {`use.\n\nIt has been released by Lobo Guará - Softwares Brasileiros under GNU License as a completelly Open Source Software.\n\nIf you are interested to contributed on new versions of Guitar Tune, checkout our github page at `}
                </Div>
                <Div className='highlight-word-bottom'>
                    https://github.com/citrixorange
                </Div>
            </Div>
        </Div>
    );
};
  
export { About };