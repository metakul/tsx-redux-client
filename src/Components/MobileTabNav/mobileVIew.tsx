import React, { ReactNode, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';

interface MobileTabNavigationProps {
  tabs: { value: ReactNode; content: ReactNode; label: string }[];
  position?:string;
  showOutlet?:boolean
}

const MobileTabNavigation: React.FC<MobileTabNavigationProps> = ({ tabs,position ,showOutlet}) => {
 
  useEffect(() => {
    if (showOutlet) {
      setValue(0);
    }
  }, [showOutlet]);
  
  const [value, setValue] = React.useState(0);
  const isNonMobile = useMediaQuery("(min-width: 766px)");
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
        className={` fixed ${position=="top" ? "top-16 left-0 " : " bottom-0 left-0"} w-full flex flex-row bg-[#005580] z-20`}
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
        <CustomTabPanel isNonMobile={isNonMobile} key={index} value={value} position={position} index={index}>
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
  isNonMobile:boolean
  position?:string
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = ({isNonMobile, children, value, index,position  }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    style={{
      paddingBottom:"50px",
      marginBottom:"50px",
    }}
    >
    {value === index && <Box   className={` ${position=="top" ? "pt-12" : ""}`} sx={{ pl: isNonMobile ? 3 : 0 }}>{children}</Box>}
  </div>
);

export default MobileTabNavigation;
