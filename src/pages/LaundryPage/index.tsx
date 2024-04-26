import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
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
export default function BasicEditingGrid() {
  const [searchQuery, setSearchQuery] = React.useState("");


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
          <Typography variant="h4" gutterBottom>
            Orders List
          </Typography>

          <Button
            to={"/createOrder"}
            component={RouterLink}
            sx={{
              py: 1.25,
              px: 3,
              borderRadius: 2,
              fontWeight: 700,
            }}
          >
            <AddIcon
              sx={{
                mr: 1,
              }}
            />
            <Typography>
              Add Order

            </Typography>
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