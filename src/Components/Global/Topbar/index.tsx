import React from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { TextFieldInput } from '@radix-ui/themes';
import { TopbarProps } from '../../../interfaces/ComponentProps';

const Topbar: React.FC<TopbarProps> = ({
  // isSidebarOpen,
  // isNonMobile,
  // setIsSidebarOpen,
  // drawerWidth,
  onSearch,
}) => (
  <Toolbar.Root className='flex flex-row'>

    {/* Search Button */}
    <Toolbar.Button onClick={onSearch}>
      <span role="img" aria-label="search">
        🔍
      </span>
    </Toolbar.Button>

    {/* Search Input */}
    <TextFieldInput
      type="search"
      placeholder="Search..."
      onInput={(e) => console.log(e.currentTarget.value)} 
    />

    {/* Separator */}
    <Toolbar.Separator />

    <Toolbar.Button>
      <span role="img" aria-label="icon1">
        🌟
      </span>
    </Toolbar.Button>

    <Toolbar.Button>
      <span role="img" aria-label="icon2">
        ⚙️
      </span>
    </Toolbar.Button>
  </Toolbar.Root>
);

export default Topbar;
