import React, { ReactNode } from 'react';
import { Tabs, Container, Box } from '@radix-ui/themes';

interface MobileTabNavigationProps {
  tabs: { value: ReactNode; content: ReactNode; label: string }[];
}

const MobileTabNavigation: React.FC<MobileTabNavigationProps> = ({ tabs }) => {
  const firstTabValue = tabs.length > 0 ? tabs[0].label : undefined;

  return (
    <Container>
      <Box>
        <Tabs.Root defaultValue={firstTabValue}>
          {tabs.map(({ content, label }) => (
            <Tabs.Content className='w-full' key={label} value={label}>
              {content}
            </Tabs.Content>
          ))}

          <Tabs.List className="bottom-tabs fixed bottom-0 w-full flex flex-row">
            {tabs.map(({ label, value }) => (
              <Tabs.Trigger key={label} value={label} className='w-1/4 h-12 bg-orange border flex justify-center items-center '>
                <span>{value}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default MobileTabNavigation;
