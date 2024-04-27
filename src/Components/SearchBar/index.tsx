import  { FC } from 'react';
import { TextField, Typography, Box } from "@mui/material";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: 16}}
      />
      <Typography
        component="span"
        variant="caption"
        style={{
          fontSize: "0.85rem",
          fontStyle: "italic",
          color: "#9e9e9e",
        }}
      >
        Search by Name, title, tags
      </Typography>
    </Box>
  );
};

export default SearchBar;
