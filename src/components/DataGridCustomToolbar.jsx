import React from 'react'
import Search from '@mui/icons-material/Search'
import { IconButton, TextField, InputAdornment } from '@mui/material'
import FlexBetween from "../components/common/FlexBetween"
import { 
    GridToolbarDensitySelector,
    GridToolbarContainer,
} from '@mui/x-data-grid'

function DataGridCustomToolbar({ handleInputSearch }) {
  return (
    <GridToolbarContainer sx={{ marginBottom: 2 }}>
      <FlexBetween width="100%">
        <GridToolbarDensitySelector />
        <TextField
          variant="standard"
          label="Search..."
          helperText="Search based on category like: Talos, Gaea, Gridiron, and etc.."
          onChange={handleInputSearch}
          sx={{
            mb: "0.5rem",
            width: "15rem",
            "& .MuiFormLabel-root": {
              color: "white",
            },
            "& .MuiFormHelperText-root": {
              color: "rgba(255, 255, 255, 0.8)",
            },
            "& .MuiInput-root": {
              color: "white",
              borderBottom: "1px solid white",
            },
            "& .MuiInputBase-root": {
              textDecoration: "none",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
}

export default DataGridCustomToolbar