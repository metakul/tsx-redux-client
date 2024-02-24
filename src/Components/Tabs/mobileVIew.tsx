// MobileTabNavigation.tsx
import React, { ReactNode } from 'react';
import { Tabs, Container, Box } from '@radix-ui/themes';

interface MobileTabNavigationProps {
  tabs: { value: string; content: ReactNode; label: string }[];
}

const MobileTabNavigation: React.FC<MobileTabNavigationProps> = ({ tabs,  }) => {
  console.log(tabs)
  const firstTabValue = tabs.length > 0 ? tabs[0].value : undefined;

  return (
    <Container className='justify-center '>
      <Box>
      <Tabs.Root  defaultValue={firstTabValue}>
        {tabs.map(({ value, content }) => (
          <Tabs.Content className='w-full' key={value} value={value}>
            {content}
          </Tabs.Content>
        ))}

        <Tabs.List
          className="bottom-tabs fixed bottom-0 w-full bg-orange-500 "
        >
          {tabs.map(({ value, label }) => (
            <Tabs.Trigger key={value} value={value} className='w-1/4 ' >
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
      </Box>

    </Container>
  );
};

export default MobileTabNavigation;
