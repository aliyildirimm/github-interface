import { Tab, Tabs } from "@mui/material"
import { useState } from "react";
import { GithubRepos } from "../types/GithubRepos";
import { SearchBarEvent } from "../types/SearchBarEvent";
import Repositories from "./Repositories"
import SearchBar from "./SearchBar"

type MainComponentProps = {
    filteredRepositories: GithubRepos[];
    searchTerm: string;
    handleUserInputChange: (event: SearchBarEvent) => void;
}

export const MainComponent = ({filteredRepositories, searchTerm, handleUserInputChange }: MainComponentProps) => {
    const [tabValue, setTabValue] = useState<number>(1);
    const tabValueHandler = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 10, flexGrow: 1 }}>            <Tabs value={tabValue} onChange={tabValueHandler} >
            <Tab label="Overview" value={0} />
            <Tab label="Repositories" value={1} />
            </Tabs>
            {tabValue === 0 && <span style={{ margin: 'auto', textAlign: 'center' }}>Not Exist Yet</span>}
            {
            tabValue === 1 && 
                <div>
                <SearchBar searchTerm={searchTerm} handleInputChange={handleUserInputChange}/>
                <Repositories repositories={filteredRepositories}/>
                </div>
            }
        </div>
    )
}