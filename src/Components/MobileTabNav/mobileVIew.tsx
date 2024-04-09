import React, { ReactNode } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface MobileTabNavigationProps {
  tabs: { value: ReactNode; content: ReactNode; label: string }[];
  position?:string
}

const MobileTabNavigation: React.FC<MobileTabNavigationProps> = ({ tabs,position }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="mobile tabs example"
        variant="fullWidth"
        className={` fixed ${position=="top" ? "top-16" : " bottom-0"} w-full flex flex-row bg-blue z-20`}
      >
        {tabs.map(({ value }, index) => (
          <Tab key={index} icon={React.createElement('div', null, value)} {...a11yProps(index)} sx={{
            '&.Mui-selected': {
              background: 'green',
            },
          }}/>
        ))}
      </Tabs>
      {tabs.map(({ content }, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

interface CustomTabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = ({ children, value, index }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    style={{
      paddingBottom:"50px",
      marginBottom:"50px",
    }}
    className='md:container'
  >
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

export default MobileTabNavigation;
