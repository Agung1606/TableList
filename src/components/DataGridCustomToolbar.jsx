import React from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, TextField, InputAdornment } from '@mui/material'
import FlexBetween from "../components/common/FlexBetween"
import { 
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton
} from '@mui/x-data-grid'

function DataGridCustomToolbar() {
  return (
    <GridToolbarContainer sx={{ marginBottom: 2}}>
        <FlexBetween width="100%">
            <FlexBetween>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
            </FlexBetween>
        </FlexBetween>
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolbar