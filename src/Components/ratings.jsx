import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function RatingComponent() {
    const [value, setValue] = useState(2); // Default rating value
  
    return (
      <Stack spacing={1}>
        <Rating
          name="user-rating"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <p>Rating: {value}</p>
      </Stack>
    );
  }
  
  export default RatingComponent;
