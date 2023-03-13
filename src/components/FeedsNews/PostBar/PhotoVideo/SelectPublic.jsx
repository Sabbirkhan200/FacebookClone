import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl  size="small" >
     
        <Select
         
   
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Public</MenuItem>
          <MenuItem value={20}>Friends</MenuItem>
          <MenuItem value={30}>Only me</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}