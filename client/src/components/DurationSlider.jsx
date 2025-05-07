import React from 'react';
import { Slider, Typography, Input, Grid } from '@mui/material';

const DurationSlider = ({ value, onChange, min = 1, max = 10, step = 1 }) => {
  const handleSliderChange = (event, newValue) => {
    onChange(newValue);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : Number(event.target.value);
    onChange(newValue);
  };

  const handleBlur = () => {
    if (value < min) {
      onChange(min);
    } else if (value > max) {
      onChange(max);
    }
  };

  return (
    <div>
      <Typography gutterBottom>Duration (minutes)</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleSliderChange}
            step={step}
            min={min}
            max={max}
            sx={{ width: '100%' }} // Ensure slider takes full width of the container
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step,
              min,
              max,
              type: 'number',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DurationSlider;
