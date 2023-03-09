import { Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import Repositories from './Components/Repositories';
import SearchBar from './Components/SearchBar';
import { Sidebar } from './Components/Sidebar';
import { fetchRepoOwner, fetchRepositories } from './service/fetch';
import { GithubRepos } from './types/GithubRepos';
import { SearchBarEvent } from './types/SearchBarEvent';
import { User } from './types/User';

const App = () => {
  const [repositories, setRepositories] = useState<GithubRepos[]>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<GithubRepos[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [repoOwner, setRepoOwner] = useState<User>()
  const [tabValue, setTabValue] = useState<number>(1);

  useEffect(() => {
    const fetchUser = async() => {
      const data = await fetchRepoOwner()
      setRepoOwner(data)
    }
    fetchUser()
    }, []);


  useEffect(() => {
    const fetchAllRepos = async() => {
      const data = await fetchRepositories()
      setRepositories(data)
      setFilteredRepositories(data)
    }
    fetchAllRepos()
    }, []);

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
    <div style = {{ display: 'flex', flexDirection: 'row', padding: 10, marginLeft: '32px', marginRight: '32px',}}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: 10, width: '25%', alignItems: 'center' }}>
        <Sidebar repoOwner={repoOwner}/>
      </div>
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
    </div>
  );
}

export default App;
