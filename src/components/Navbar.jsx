import React from 'react'
import { 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material'
import { Menu as IconMenu } from '@mui/icons-material'

function Navbar() {
  return (
    <AppBar
      sx={{
        position: "static",
        background: "red",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton>
          <IconMenu sx={{ color: "white" }} />
        </IconButton>

        <Typography sx={{ fontSize: 18, fontFamily: "Inter"}}>
          Apex Legends
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar