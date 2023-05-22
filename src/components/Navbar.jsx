import React from 'react'
import { 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material'
import { Menu as IconMenu } from '@mui/icons-material'
import logoApex from '../assets/apex-white.png'

function Navbar({ handleSidebar }) {
  return (
    <AppBar
      sx={{
        position: "static",
        background: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton onClick={handleSidebar}>
          <IconMenu sx={{ color: "white", fontSize: 35 }} />
        </IconButton>

        <img src={logoApex} style={{ width: 180, height: 50 }} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar