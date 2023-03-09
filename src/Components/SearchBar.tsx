import { Box, TextField } from "@mui/material";
import React from "react";
import { SearchBarEvent } from "../types/SearchBarEvent";

type SearchBarProps = {
    searchTerm: string;
    handleInputChange: (event: SearchBarEvent) => void;
}

const SearchBar = ({ searchTerm, handleInputChange }: SearchBarProps) => {
    return (
        <Box sx={{ display: 'flex', width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
            <TextField label="Search for a repository" variant="outlined" value={searchTerm} onChange={handleInputChange} style={{ flexGrow: 1, }} />
        </Box>
    );
}

export default SearchBar;