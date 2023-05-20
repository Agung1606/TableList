import React from "react";
import {
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

function ModalEdit({ item, handleCloseModal }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {item.nickname}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Disagree</Button>
        <Button onClick={handleCloseModal}>Agree</Button>
      </DialogActions>
    </Box>
  );
}

export default ModalEdit;
