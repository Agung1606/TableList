import React from 'react'
import { Box, Button, Tooltip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
// import { ModeEditIcon, ArrowForwardIosIcon } from "@mui/icons-material";
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import DataGridCustomToolbar from './DataGridCustomToolbar';

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: false,
    sortable: true,
    renderCell: (params) =>
      `${params.row.firstName !== null ? params.row.firstName : "-"}`,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
    renderCell: (params) =>
      `${params.row.lastName !== null ? params.row.lastName : "NaN"}`,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: false,
    sortable: false,
    renderCell: (params) =>
      `${params.row.age !== null ? params.row.age : "NaN"}`,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "",
    headerName: "actions",
    width: 140,
    renderCell: (params) => (
      <>
        <Tooltip title="Edit">
          <Button onClick={() => alert("open modal edit row")}>
            <ModeEditIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Details">
          <Button onClick={() => alert("See details")}>
            <ArrowForwardIosIcon />
          </Button>
        </Tooltip>
      </>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];


function TableList() {
  return (
    <Box>
      <Box
      height="90vh"
        sx={{
          "& .MuiDataGrid-root": {
            background: "rgba(0, 0, 0, 0.73)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            padding: 2,
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
        />
      </Box>
    </Box>
  );
}

export default TableList