import React, { useState, useMemo, forwardRef } from 'react'
import axios from 'axios'
import { 
  Box, 
  Avatar, 
  Button,
  Tooltip, 
  useMediaQuery,
  Dialog,
  Slide
} from "@mui/material"
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bgImage from '../assets/bgImage.jpg'
import charImg from '../assets/R.png'
import TableList from '../components/TableList'
import ModalEdit from '../components/common/ModalEdit';
import ModalDetails from '../components/common/ModalDetails';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
})

function Home() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(undefined);
  const [item, setItem] = useState({});

  const getDataApexLegends = async () => {
    try {
      const response = await axios.get(
        "https://raddythebrand.github.io/apex-legends/data.json"
      );
      setData(response.data);
    } catch (error) {
      return error;
    }
  };

  useMemo(() => {
    getDataApexLegends();
  }, []);

  // modal configuration
  const [modalType, setModalType] = useState("edit");
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (data, type) => {
    setOpenModal(true);
    setModalType(type);
    setItem(data);
  };
  const handleCloseModal = () => setOpenModal(false);

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
      field: "nickname",
      headerName: "Name",
      editable: false,
      sortable: false,
      width: 120,
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
      headerName: "",
      width: 160,
      renderCell: (params) => (
        <>
          <Tooltip title="Edit">
            <Button onClick={() => handleOpenModal(params.row, "edit")}>
              <ModeEditIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Details">
            <Button onClick={() => handleOpenModal(params.row, "details")}>
              <ArrowForwardIosIcon />
            </Button>
          </Tooltip>
        </>
      ),
    },
  ];

  // search configuration
  const handleInputSearch = (event) => {
    const filtered = data.filter((item) => {
      return item.home.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setFilteredData(filtered);
  };

  return (
    <>
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
          {isDesktop && (
            <img src={charImg} style={{ width: 380, height: 580 }} />
          )}
          <TableList
            rows={filteredData ? filteredData : data}
            columns={columns}
            handleInputSearch={handleInputSearch}
          />
        </Box>
      </Box>
      <Dialog
        fullScreen
        open={openModal}
        TransitionComponent={Transition}
        onClose={handleCloseModal}
      >
        {modalType === "edit" ? (
          <ModalEdit item={item} handleCloseModal={handleCloseModal} />
        ) : (
          <ModalDetails item={item} handleCloseModal={handleCloseModal} />
        )}
      </Dialog>
    </>
  );
}

export default Home