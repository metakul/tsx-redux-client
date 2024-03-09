import * as React from 'react';
import {  useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import NavSection from './NavItem/NavItem';

//css
import { Drawer, DrawerHeader } from './style.css';


export interface MiniDrawerProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: () => void;
    navConfig: {
        text: string;
        icon: React.ReactNode | null;
        to: string;
    }[];
}


const MiniDrawer: React.FC<MiniDrawerProps> = ({ setIsSidebarOpen, isSidebarOpen, navConfig }) => {
    const theme = useTheme();

    return (
          
            <Drawer variant="permanent" open={isSidebarOpen} >
                <DrawerHeader>
                    <IconButton onClick={() => setIsSidebarOpen()} >
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List
                sx={{
                    pb:8
                }}>
                    {navConfig.map((item, index) => (
                        <NavSection item={item} key={index} isSidebarOpen={isSidebarOpen}/>
                    ))}
                </List>
                <Divider />
            </Drawer>
         
    );
}
export default MiniDrawer;