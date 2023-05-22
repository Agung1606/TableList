import React from 'react'
import { Drawer, Box } from '@mui/material'
import logoApex from "../assets/apex-white.png";


function Sidebar({ isSidebarOpen, handleSidebar }) {
  return (
    <Drawer
      anchor={"left"}
      open={isSidebarOpen}
      onClose={handleSidebar}
      sx={{
        width: "350px",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "350px",
        },
      }}
    >
      <Box
        sx={{
          padding: 1,
          backgroundColor: "#2b4162",
          width: "100%",
          height: "100%",
        }}
      >
        <img src={logoApex} style={{ width: 180, height: 50 }} />
      </Box>
    </Drawer>
  );
}

export default Sidebar