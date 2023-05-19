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
      // background-color: #485461;
      // background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
      /*
        background-color: #2b4162;
        background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
      */
      sx={{
        position: "static",
        background: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
        // boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton>
          <IconMenu sx={{ color: "white" }} />
        </IconButton>

        <Typography sx={{ fontSize: 18, fontFamily: "Inter" }}>
          Apex Legends
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar