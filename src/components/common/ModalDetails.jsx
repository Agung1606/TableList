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
      <Box sx={{ marginX: 2, marginTop: 4, marginBottom: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isDesktop && (
            <img
              src={item.thumbnail.small}
              alt={`chars-image-${item.nickname}`}
              style={{
                width: 255,
                height: 385,
              }}
            />
          )}
          <Box sx={{ overflowY: "scroll", height: 400, padding: 1 }}>
            {/* profile card */}
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: 25,
                fontFamily: "sans-serif",
                textAlign: "center",
              }}
            >
              Profile
            </Typography>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "rgba(185, 185, 185, 0.15)",
                borderRadius: "10px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: 3,
                width: 550,
              }}
            >
              <Typography
                sx={{
                  color: "rgba(240, 240, 240, 0.85)",
                  fontSize: 20,
                  fontFamily: "sans",
                }}
              >
                Name: {item.name}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(240, 240, 240, 0.85)",
                  fontSize: 20,
                  fontFamily: "sans",
                }}
              >
                Nickname: {item.nickname}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(240, 240, 240, 0.85)",
                  fontSize: 20,
                  fontFamily: "sans",
                }}
              >
                Age: {item.age}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(240, 240, 240, 0.85)",
                  fontSize: 20,
                  fontFamily: "sans",
                }}
              >
                Quote: {item.quote}
              </Typography>
            </Box>
            {/* about */}
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: 25,
                fontFamily: "sans-serif",
                textAlign: "center",
                fontStretch: "expanded",
              }}
            >
              About
            </Typography>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "rgba(185, 185, 185, 0.15)",
                borderRadius: "10px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                width: 550,
              }}
            >
              <Typography
                sx={{
                  color: "rgba(240, 240, 240, 0.85)",
                  fontSize: 16,
                  fontFamily: "sans-serif",
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* skill */}
        <Box sx={{ marginTop: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              columnGap: 1,
              marginX: 2,
            }}
          >
            {item.ability.map((data) => (
              <Box
                sx={{
                  paddingX: "4px",
                  paddingY: "10px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.65)",
                  borderRadius: "10px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  width: 400,
                }}
              >
                <Tooltip title={data.title}>
                  <img
                    src={data.icon}
                    alt={`skill-img`}
                    style={{ width: 130, height: 80, cursor: "pointer" }}
                  />
                </Tooltip>
                <Typography sx={{ color: "white" }}>{data.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ModalDetails