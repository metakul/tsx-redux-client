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
// Mock order array based on the orderColumn structure
const mockOrders = [
  {
      _id: "1",
      orderNumber: "ORD001",
      status: "Pending",
      items: ["Item 1", "Item 2", "Item 3"]
  },
  {
      _id: "2",
      orderNumber: "ORD002",
      status: "Completed",
      items: ["Item 4", "Item 5"]
  },
  {
      _id: "3",
      orderNumber: "ORD003",
      status: "Processing",
      items: ["Item 6"]
  },
  // Add more mock orders as needed
];


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
    <Container >
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
            <Typography>Add Order</Typography>
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
            loading={false}
            rows={mockOrders}
            columns={orderColumn}
            getRowId={(row) => row.orderNumber}
          />
        </>

      </Container>

    </Container>
  );
}