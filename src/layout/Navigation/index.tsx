import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import NavItem from './NavItem/NavItem';
import { Drawer } from '@mui/material';
//css
import { CustomDrawer, DrawerHeader } from './style.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export interface MiniDrawerProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: () => void;
    isNonMobile: boolean;
    navConfig: {
        text: string;
        icon: React.ReactNode | null;
        to: string;
    }[];
}


const MiniDrawer: React.FC<MiniDrawerProps> = ({ setIsSidebarOpen, isNonMobile, isSidebarOpen, navConfig }) => {
    const theme = useTheme();

    return (
        <>
            {isNonMobile ? (
                <CustomDrawer variant="permanent" open={isSidebarOpen} theme={theme} >
                    <DrawerHeader>
                        <IconButton onClick={() => setIsSidebarOpen()} >
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List >
                        {navConfig.map((item, index) => (
                            <NavItem isNonMobile={isNonMobile} item={item} key={index} isSidebarOpen={isSidebarOpen} />
                        ))}
                    </List>
                    <Divider />
                </CustomDrawer>
            ) : (
                <Drawer
                    variant="persistent"
                    open={isSidebarOpen}
                >
                    <DrawerHeader>
                        <IconButton onClick={() => setIsSidebarOpen()} >
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List >
                        {navConfig.map((item, index) => (
                            <NavItem isNonMobile={isNonMobile} item={item} key={index} isSidebarOpen={isSidebarOpen} />
                        ))}
                    </List>
                    <Divider />
                </Drawer>
            )}
        </>


    );
}
export default MiniDrawer;