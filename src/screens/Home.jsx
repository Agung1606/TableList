import React, { useState, useMemo } from 'react'
import axios from 'axios'
import { Box, Avatar, Button, Tooltip, useMediaQuery } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bgImage from '../assets/bgImage.jpg'
import charImg from '../assets/R.png'
import TableList from '../components/TableList'

const columns = [
  {
    field: "thumbnail",
    headerName: "Avatar",
    editable: false,
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <Avatar
        alt={`profile-${params.row.nickname}`}
        src={params.row.thumbnail.default}
      />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    editable: false,
    sortable: false,
    width: 200,
  },
  {
    field: "age",
    headerName: "Age",
    editable: false,
    sortable: false,
    width: 100,
  },
  {
    field: "type",
    headerName: "Type",
    editable: false,
    sortable: false,
    width: 200,
  },
  {
    field: "quote",
    headerName: "Quote",
    editable: false,
    sortable: false,
    width: 330,
  },
  {
    field: "home",
    headerName: "Category",
    editable: false,
    sortable: false,
    width: 130,
  },
  {
    field: "",
    headerName: "Actions",
    width: 180,
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

function Home() {
  const [ data, setData ] = useState([]);
  const isDesktop = useMediaQuery("(min-width: 1200px)")

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

  const imgStyle = {
    width: 380,
    height: 580,
    "& img:hover": {
      scale: 1.1
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: 3,
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {isDesktop && <img src={charImg} style={{ width: 380, height: 580 }} />}
        <TableList rows={data} columns={columns} />
      </Box>
    </Box>
  );
}

export default Home