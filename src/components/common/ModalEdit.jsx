import React from "react";
import {
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  useMediaQuery
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const inputStyle = {
  mb: "0.5rem",
  width: "20rem",
  "& .MuiFormLabel-root": {
    color: "white",
  },
  "& .MuiInput-root": {
    color: "white",
    borderBottom: "1px solid white",
  },
};

function ModalEdit({ item, handleCloseModal }) {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      sx={{
        background: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
        width: "100%",
        height: "100%",
      }}
    >
      <AppBar
        sx={{
          position: "relative",
          background: "none",
          boxShadow: "none",
          borderBottom: "1px solid #485461",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseModal}
            aria-label="close"
          >
            <CloseIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <Typography sx={{ ml: 4, flex: 1 }} variant="h5" component="div">
            Edit
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginX: 2,
          marginY: 4,
        }}
      >
        {isDesktop && (
          <img
            src={item.thumbnail.small}
            alt={`chars-${item.nickname}`}
            style={{ width: 250, height: 400 }}
          />
        )}
        <Box
          sx={{
            padding: 2,
            backgroundColor: "rgba(150, 150, 150, 0.1)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* wrapper for all input */}
          <Box sx={{ marginBottom: 4 }}>
            {/* wrapper input for name and age */}
            <Box sx={{ display: "flex", columnGap: 4, marginBottom: 5 }}>
              <TextField
                label="Name"
                variant="standard"
                value={item.nickname}
                sx={inputStyle}
              />
              <TextField
                label="Age"
                variant="standard"
                value={item.age}
                sx={inputStyle}
              />
            </Box>
            {/* wrapper input for type and category */}
            <Box sx={{ display: "flex", columnGap: 4, marginBottom: 5 }}>
              <TextField
                label="Type"
                variant="standard"
                value={item.type}
                sx={inputStyle}
              />
              <TextField
                label="Category"
                variant="standard"
                value={item.home}
                sx={inputStyle}
              />
            </Box>
            {/* quote */}
            <TextField
              label="Quote"
              variant="standard"
              value={item.quote}
              sx={inputStyle}
              multiline
              rows={2}
            />
          </Box>
          {/* button */}
          <Button
            sx={{
              backgroundColor: "#4169e1",
              color: "white",
              width: "200px",
              borderRadius: "90px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ModalEdit;


{
  /* <Box sx={{ display: "flex", columnGap: 1, marginX: 2 }}>
        {item.ability.map((data) => (
          <Box
            sx={{
              padding: "4px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              borderRadius: "10px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
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
      </Box> */
}