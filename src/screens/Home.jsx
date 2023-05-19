import React, { useState, useMemo } from 'react'
import axios from 'axios'
import { Box, Avatar } from '@mui/material'
import bgImage from '../assets/bgImage.jpg'
import TableList from '../components/TableList'

const columns = [
  {
    field: "thumbnail",
    headerName: "Avatar",
    editable: false,
    sortable: false,
    flex: 0.2,
    renderCell: (params) => (
      <Avatar alt="profile" src={params.row.thumbnail.default} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    editable: false,
    sortable: false,
    flex: 1,
  },
];

function Home() {
  const [ data, setData ] = useState([]);

  useMemo(async() => {
    try {
      const response = await axios.get(
        "https://raddythebrand.github.io/apex-legends/data.json"
      );
       setData(response.data);
    } catch(error) {
      return error;
    }
  }, [])

  return (
    <Box
      sx={{
        height: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* table */}
      <TableList rows={data} columns={columns} />
    </Box>
  );
}

export default Home