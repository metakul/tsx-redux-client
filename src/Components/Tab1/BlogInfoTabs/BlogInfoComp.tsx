import React, { ReactNode } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

interface BlogInfoTabProps {
  tabs: { value: ReactNode; content: ReactNode; label: string }[];
}

const BlogInfoTab: React.FC<BlogInfoTabProps> = ({ tabs }) => {
  const [value, setValue] = React.useState<number | null>(null); // Initially null
  const theme = useTheme();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `blog-tab-${index}`,
      'aria-controls': `blog-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Blog information tabs"
        variant="fullWidth"
      >
        {tabs.map(({ label }, index) => (
          <Tab
            key={index}
            label={label}
            {...a11yProps(index)}
            sx={{
              backgroundColor: value === index ? theme.palette.grey[200] : 'inherit',
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          />
        ))}
      </Tabs>
      {tabs.map(({ content }, index) => (
        <div key={index} role="tabpanel" hidden={value !== index} id={`blog-tabpanel-${index}`}>
          {value === index && <Box sx={{ pt: 1 }}>{content}</Box>}
        </div>
      ))}
    </Box>
  );
};

export default BlogInfoTab;
