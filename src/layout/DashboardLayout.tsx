// DashboardPage 
// Require Auth

import React, { memo } from 'react';
import {  Outlet } from 'react-router-dom';
import { Layoutprops } from '../interfaces/interface';

const DashboardOutlet: React.FC<Layoutprops> = memo(() => {
  return (
    <div >
     <Outlet/>
    </div>
  );
});

export default DashboardOutlet;
