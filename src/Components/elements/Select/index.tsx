import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BasicSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menuItems: { value: any; label: string }[];
}

const BasicSelect: React.FC<BasicSelectProps> = ({ value, onChange, label, menuItems }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={onChange}
        >
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem.value} value={menuItem.value}>
              {menuItem.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
