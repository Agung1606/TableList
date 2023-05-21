import React from 'react'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import DataGridCustomToolbar from './DataGridCustomToolbar';

function TableList({ rows, columns, handleInputSearch }) {
  return (
      <Box
        width={800}
        height="85vh"
        sx={{
          "& .MuiDataGrid-root": {
            background: "rgba(0, 0, 0, 0.73)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            border: "none",
            padding: 1
          },
          "& .MuiButtonBase-root": {
            color: "white",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
            color: "white",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
            color: "white",
            fontSize: 18,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            color: "white",
          },
          "& .MuiTablePagination-root": {
            color: "white",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "rgba(200, 200, 200, 0.3)",
          },
        }}
      >
        <DataGrid
          loading={!rows}
          getRowId={(row) => row._id.$oid}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
          // custom data grid toolbar
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { handleInputSearch },
          }}
        />
      </Box>
  );
}

export default TableList