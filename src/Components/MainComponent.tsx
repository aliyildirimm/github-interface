import { Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react";
import { fetchRepositories } from "../service/fetch";
import { GithubRepos } from "../types/GithubRepos";
import { SearchBarEvent } from "../types/SearchBarEvent";
import Repositories from "./Repositories"
import SearchBar from "./SearchBar"

type MainComponentProps = {
    repoOwner: string;
}

export const MainComponent = ( { repoOwner } : MainComponentProps ) => {
    const [repositories, setRepositories] = useState<GithubRepos[]>([]);
    const [filteredRepositories, setFilteredRepositories] = useState<GithubRepos[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [tabValue, setTabValue] = useState<number>(1);

    useEffect(() => {
        const fetchAllRepos = async() => {
          const data = await fetchRepositories(repoOwner)
          setRepositories(data)
          setFilteredRepositories(data)
        }
        fetchAllRepos()
        }, [repoOwner]);
    
    const handleUserInputChange = (event: SearchBarEvent) => {
        const input = (event.target.value).toLowerCase();
        setSearchTerm(input)
        const filteredRepos = repositories.filter((repo: GithubRepos) => repo.name.toLocaleLowerCase().includes(input))
        setFilteredRepositories(filteredRepos)
    }

    const tabValueHandler = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 10, flexGrow: 1 }}>
            <Tabs value={tabValue} onChange={tabValueHandler} >
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