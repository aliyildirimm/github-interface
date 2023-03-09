import { Box } from "@mui/material";
import React from "react";
import { SearchBarEvent } from "./types/SearchBarEvent";

type SearchBarProps = {
    searchTerm: string;
    handleInputChange: (event: SearchBarEvent) => void;
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <Box sx={{ display: 'flex', height: '40px', width: '50%', justifyContent: 'center', margin: 'auto' }}>
            <input type="text" placeholder="Search for a repository" value={props.searchTerm} onChange={props.handleInputChange} style={{ flexGrow: 1 }}/>
        </Box>
    );
}

export default SearchBar;