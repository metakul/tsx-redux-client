import React, { useState } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { NavbarProps } from '../../../interfaces/ComponentProps';

const Navbar: React.FC<NavbarProps> = ({ isNonMobile }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Toolbar.Root className='flex flex-row'>
      {isNonMobile && (
        <Toolbar.Button onClick={handleNavToggle}>
          <span role="img" aria-label="menu">
            {isNavOpen ? '❌' : '🍔'}
          </span>
        </Toolbar.Button>
      )}

    </Toolbar.Root>
  );
};

export default Navbar;
