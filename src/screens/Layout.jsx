import React, { useState } from 'react'
import { Box, Drawer } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Box width="100%" height="100%">
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />
      <Navbar handleSidebar={handleSidebar} />
      <Outlet />
    </Box>
  );
}

export default Layout