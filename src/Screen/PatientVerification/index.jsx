import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Box,  Paper, Typography, useTheme } from "@mui/material";
import SearchBar from "../../../Components/SearchBar";
import DataGrid from "../../../Components/Tables/DataGrid";
import Pagination from "../../../Components/Pagination";
import UserOptionsMenu from "../../../Components/UserOptionMenu";

import PatientColumn from "./PatientColumn";
import { getPatient,updatePatientByPage } from "../../../redux/Patient/patientActions";
import LoadingOverlay from "../../../Components/LoadingOverLay/LoadingOverLay";
export default function PatientVerification() {
  const theme=useTheme()
  const dispatch = useDispatch();
  const { patients, loading,pagination } = useSelector(state => state.patient);
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenu, setOpenMenu] = React.useState(null);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const columns = PatientColumn(setOpenMenu, setSelectedRowId);
  useEffect(() => {
    dispatch(getPatient(pagination.currentPage));

  }, [dispatch, pagination.currentPage]);


  // Apply filtering only if rows have data
  const filteredRows = patients.filter((row) =>
    row.brahmaId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePageChange = (action) => {
    if (action === "next" && pagination.hasNextPage) {
      dispatch(getPatient(pagination.currentPage + 1));
    } else if (action === "previous" && pagination.hasPreviousPage) {
      dispatch(getPatient(pagination.currentPage - 1));
    }
  };

  const updatePatientStatus = (patientId, status) => {
    // Assuming updateUserByPage takes userId and status to update the user
    dispatch(updatePatientByPage(patientId,pagination.currentPage,status));
    setOpenMenu(null);
  };


return (
  <Container maxWidth="xl">
    <Box > {/* Apply blur when updating */}
    <Typography variant="h2" fontWeight="bold">
           Patient Verification
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ mb: 2, overflow: "hidden", borderRadius: 4,backgroundColor: theme.palette.background.default }}>
          <Box sx={{ width: "100%", margin: "16px", position: "relative" }}>
              <Paper sx={{ overflow: "hidden", borderRadius: 4 }}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <LoadingOverlay loading={loading} />
                <DataGrid columns={columns} rows={filteredRows} theme={theme}/>
                <Pagination
                  currentPage={pagination.currentPage}
                  hasNextPage={pagination.hasNextPage}
                  hasPreviousPage={pagination.hasPreviousPage}
                  handlePageChange={handlePageChange}
                />
                 <UserOptionsMenu
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  selectedRowId={selectedRowId}
                  updateUserStatus={updatePatientStatus}
                /> 
              </Paper>
          </Box>
        </Paper>
      </Box>
    </Box>
  </Container>
);
}
