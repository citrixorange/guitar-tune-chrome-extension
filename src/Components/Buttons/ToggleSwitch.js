import React from 'react';
import '../../css/ToggleSwitch.css';

const ToggleSwitch = ({ label, isOn, handleToggle }) => {
  return (
    <div className="toggle-container">
      <label className="toggle-label">{label}</label>
      <div className="switch">
        <input
          className="switch-checkbox"
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
        />
        <span className="switch-slider"></span>
      </div>
    </div>
  );
};

export {
    ToggleSwitch
};
