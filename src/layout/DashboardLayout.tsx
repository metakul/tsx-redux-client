// DashboardPage 
// Require Auth

import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/slices/authSlice';
import { Navigate, Outlet } from 'react-router-dom';
import { Layoutprops } from '../interfaces/interface';

const DashboardOutlet: React.FC<Layoutprops> = memo(() => {
  const token=useSelector(selectToken)
  return (
    token
    ? <Outlet/>
    :<Navigate to="/" state={{from:location}} replace />
  );
});

export default DashboardOutlet;
