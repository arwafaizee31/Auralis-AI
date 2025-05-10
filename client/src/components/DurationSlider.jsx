import React from 'react';
import '../styles/DurationSlider.css';

const DurationSlider = ({ value, onChange, min = 1, max = 30, step = 1 }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="duration-slider-container">
      <div className="duration-time">{formatTime(value)}</div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="duration-range"
      />
    </div>
  );
};


export default DurationSlider;
