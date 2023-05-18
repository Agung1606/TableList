import React from 'react'
import { Box } from '@mui/material'
import bgImage from '../assets/bgImage.jpg'
import Navbar from '../components/Navbar'
import TableList from '../components/TableList'


function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* navbar */}
      <Navbar />
      {/* table */}
      <TableList />
    </Box>
  );
}

export default Home