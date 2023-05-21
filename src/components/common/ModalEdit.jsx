import React from "react";
import {
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
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
  return (
    <Box
      sx={{
        backgroundColor: "black",
        width: "100%",
        height: "auto",
      }}
    >
      <AppBar sx={{ position: "relative", background: "none" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseModal}
            aria-label="close"
          >
            <CloseIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <Typography sx={{ ml: 5, flex: 1 }} variant="h5" component="div">
            Edit
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", marginX: 3 }}>
        <img alt={`img-${item.nickname}`} src={item.thumbnail.small} />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* wrapper input */}
          <Box sx={{ marginBottom: 8 }}>
            <Box style={{ display: "flex", columnGap: 20, marginBottom: 60 }}>
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
            <Box style={{ display: "flex", columnGap: 20, marginBottom: 60 }}>
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
            <TextField
              label="Quote"
              variant="standard"
              value={item.quote}
              sx={inputStyle}
            />
          </Box>
          {/* save button */}
          <Button
            sx={{
              color: "white",
              fontSize: "15px",
              background: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
              paddingX: "50px"
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
