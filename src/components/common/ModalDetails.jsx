import React from 'react'
import { Box, IconButton, useMediaQuery, Typography, Tooltip } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close"

function ModalDetails({ item, handleCloseModal }) {
  // hooks
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      sx={{
        background: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
        width: "100%",
        height: "auto",
      }}
    >
      {/* close */}
      <IconButton onClick={handleCloseModal}>
        <CloseIcon sx={{ color: "white", fontSize: 35 }} />
      </IconButton>
      {/* container */}
      <Box sx={{ marginX: 2, display: "flex", justifyContent: "space-evenly" }}>
        <img
          src={item.thumbnail.small}
          alt={`chars-image-${item.nickname}`}
          style={{
            width: 500,
            height: 700,
          }}
        />
        <Box>
          <Typography sx={{ color: "white", fontSize: 22, fontFamily: "sans" }}>
            Name: {item.nickname}
          </Typography>
          <Typography sx={{ color: "white", fontSize: 22, fontFamily: "sans" }}>
            Age: {item.age}
          </Typography>
          <Typography sx={{ color: "white", fontSize: 22, fontFamily: "sans" }}>
            Quote: {item.quote}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ModalDetails