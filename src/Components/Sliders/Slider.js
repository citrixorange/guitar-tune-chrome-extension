import React from 'react';
import '../../css/Slide.css';

const Slider = ({ label, min, max, step, value, onChange }) => {
  return (
    <div className="slider-container" style={{ margin: '1rem' }}>
      <label>{label}: {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="custom-slider"
      />
    </div>
  );
};

export {
    Slider
};
