import React from 'react'
import Search from '@mui/icons-material/Search'
import { IconButton, TextField, InputAdornment } from '@mui/material'
import FlexBetween from "../components/common/FlexBetween"
import { 
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarColumnsButton
} from '@mui/x-data-grid'

function DataGridCustomToolbar({ handleInputSearch }) {
  return (
    <GridToolbarContainer sx={{ marginBottom: 2 }}>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
        </FlexBetween>
        <TextField
          variant="standard"
          label="Search..."
          onChange={handleInputSearch}
          sx={{
            mb: "0.5rem",
            width: "15rem",
            "& .MuiFormLabel-root": {
              color: "white",
            },
            "& .MuiInput-root": {
              color: "white",
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