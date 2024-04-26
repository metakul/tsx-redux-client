import * as React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import {
  Container,
  
  Stack,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
} from "@mui/icons-material";

// import { FetchMyOrders } from '../../utils/apiUrl/Laundry/Get/getApi';
// import { markOrderAsPickedUp } from '../../utils/apiUrl/Laundry/Post/PostApi';

// Import your loading GIF
import { orderColumn } from "./Columns";
import CustomDataGrid from "../../Components/DataGrid";
import BreadCrumbs from "../../Components/elements/BreadCrumbs";
export default function ViewLaundryDetails() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const location = useLocation();

  const handleSearchInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };


  return (
    <Container className="container">
      <Container >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            mb: 5,
          }}
        >
        <BreadCrumbs currentPath={location.pathname}/>
          <Button
            to={"/createOrder"}
            component={RouterLink}
          >
            <AddIcon/>
            <Typography>  Add Order </Typography>
          </Button>
        </Stack>

        <>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchInputChange}
            style={{ marginBottom: 16 }}
          />
          <CustomDataGrid
            rows={[]}
            columns={orderColumn}
            getRowId={(row) => row.orderNumber}
          />
        </>

      </Container>

    </Container>
  );
}