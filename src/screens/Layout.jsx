import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Layout() {
  return (
    <Box width="100%" height="100%">
        <Navbar />
        <Outlet />
    </Box>
  )
}

export default Layout