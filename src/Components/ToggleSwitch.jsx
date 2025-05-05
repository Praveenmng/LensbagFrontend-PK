import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

function ToggleSwitch(props) {
  const [enabled, setEnabled] = useState(false);

  const handleChange = (event) => {
    setEnabled(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={enabled}
          onChange={handleChange}
          sx={{
           
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: 'white',  
            },
            
            '& .MuiSwitch-track': {
              backgroundColor: 'black',  
            },
           
            transition: 'background-color 0.3s, color 0.3s',
          }}
        />
      }
      label={props.label}
    />
  );
}

export default ToggleSwitch;
