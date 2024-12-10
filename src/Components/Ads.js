import React, { useState, useEffect } from 'react';
import ads from '../../images/assets/ads.gif';

const Ads = () => {
    return (
        <div>
            <a href="https://www.profitablecpmrate.com/v5t4n245?key=5d1ed97815a2422c1c50f11e05a89961" target="_blank" rel="noopener noreferrer">
                <img src={ads} alt="ads" style={{ cursor: 'pointer' }}/>
            </a>
        </div>
    );
};
  
export { Ads };