    import React, { useState, useEffect } from 'react';
    import {
        scale_0,
        scale_1,
        scale_2,
        scale_3,
        scale_4,
        scale_5,
        scale_6,
        scale_7,
        scale_8,
        scale_9,
        scale_10,
        scale_11,
        scale_12,
        scale_13,
        scale_14,
        scale_15,
        scale_16,
        scale_17,
        scale_18,
        scale_19,
        scale_20,
        scale_21,
        scale_22,
        scale_23,
        scale_24,
        scale_25,
        scale_26,
        scale_27,
        scale_28,
        scale_29,
        scale_30,
        scale_31,
        scale_32,
        scale_33,
        scale_34,
        scale_35,
        scale_36,
        scale_37,
        scale_38,
        scale_39,
        scale_40,
        scale_41,
        scale_42,
        scale_43,
        scale_44,
        scale_45,
        scale_1p,
        scale_2p,
        scale_3p,
        scale_4p,
        scale_5p,
        scale_6p,
        scale_7p,
        scale_8p,
        scale_9p,
        scale_10p,
        scale_11p,
        scale_12p,
        scale_13p,
        scale_14p,
        scale_15p,
        scale_16p,
        scale_17p,
        scale_18p,
        scale_19p,
        scale_20p,
        scale_21p,
        scale_22p,
        scale_23p,
        scale_24p,
        scale_25p,
        scale_26p,
        scale_27p,
        scale_28p,
        scale_29p,
        scale_30p,
        scale_31p,
        scale_32p,
        scale_33p,
        scale_34p,
        scale_35p,
        scale_36p,
        scale_37p,
        scale_38p,
        scale_39p,
        scale_40p,
        scale_41p,
        scale_42p,
        scale_43p,
        scale_44p,
        scale_45p,
    } from './Scales';
    import '../css/Tuner.css';

    const Scale = ({ degree }) => {
        const scales = [
            scale_45p, scale_44p, scale_43p, scale_42p, scale_41p,
            scale_40p, scale_39p, scale_38p, scale_37p, scale_36p,
            scale_35p, scale_34p, scale_33p, scale_32p, scale_31p,
            scale_30p, scale_29p, scale_28p, scale_27p, scale_26p,
            scale_25p, scale_24p, scale_23p, scale_22p, scale_21p,
            scale_20p, scale_19p, scale_18p, scale_17p, scale_16p,
            scale_15p, scale_14p, scale_13p, scale_12p, scale_11p,
            scale_10p, scale_9p, scale_8p, scale_7p, scale_6p, scale_5p,
            scale_4p, scale_3p, scale_2p, scale_1p, scale_0, scale_1, 
            scale_2, scale_3, scale_4, scale_5, scale_6, scale_7, scale_8,
            scale_9, scale_10, scale_11, scale_12, scale_13, scale_14, 
            scale_15, scale_16, scale_17, scale_18, scale_19, scale_20, 
            scale_21, scale_22, scale_23, scale_24, scale_25, scale_26, 
            scale_27, scale_28, scale_29, scale_30, scale_31, scale_32, 
            scale_33, scale_34, scale_35, scale_36, scale_37, scale_38, 
            scale_39, scale_40, scale_41, scale_42, scale_43, scale_44, 
            scale_45
        ];


        if(degree) {
            let scaleImage = scales[45-degree.degree];
            return (
                <div className='scaler'>
                    <img src={scaleImage} alt={`Scale ${degree.degree}`} className='' />
                </div>
            );
        } else {
            let scaleImage = scales[45];
            return (
                <div className='scaler'>
                    <img src={scaleImage} alt={`Scale 0`} className='' />
                </div>
            );
        }

    };
    
    export { Scale };