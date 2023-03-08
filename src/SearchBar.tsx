import React from "react";

type SearchBarProps = {
    searchTerm: string;
    handleInputChange: (event: any) => void;
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <div style={{ display: 'flex', height: '10%', justifyContent: 'center' }}>
            <input type="text" placeholder="Search for a repository" value={props.searchTerm} onChange={props.handleInputChange} style={{ flexGrow: 1 }}/>
        </div>
    );
}

export default SearchBar;