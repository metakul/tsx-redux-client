// MobileTabNavigation.tsx
import React, { ReactNode } from 'react';
import { Tabs, Box } from '@radix-ui/themes';

interface MobileTabNavigationProps {
  tabs: { value: string; content: ReactNode; label: ReactNode }[];
}

const MobileTabNavigation: React.FC<MobileTabNavigationProps> = ({ tabs }) => {
  const firstTabValue = tabs.length > 0 ? tabs[0].value : undefined;

  return (
    <Tabs.Root defaultValue={firstTabValue}>
      <Box px="4" pt="3">
        {tabs.map(({ value, content }) => (
          <Tabs.Content key={value} value={value}>
            {content}
          </Tabs.Content>
        ))}
      </Box>

      <Tabs.List
        className="bottom-tabs"
        style={{ position: 'fixed', bottom: 0, width: '100%', background: 'white', borderTop: '1px solid #ddd' }}
      >
        {tabs.map(({ value, label }) => (
          <Tabs.Trigger  value={value} style={{ flex: 4,width: '25%', textAlign: 'center' }}>
            {label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default MobileTabNavigation;
