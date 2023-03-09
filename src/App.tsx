import React, { useEffect, useState } from 'react';
import './App.css';
import { MainComponent } from './Components/MainComponent';
import { Sidebar } from './Components/Sidebar';
import { fetchRepoOwner, fetchRepositories } from './service/fetch';
import { GithubRepos } from './types/GithubRepos';
import { SearchBarEvent } from './types/SearchBarEvent';
import { User } from './types/User';

const App = () => {
  const [repositories, setRepositories] = useState<GithubRepos[]>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<GithubRepos[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [repoOwner, setRepoOwner] = useState<User>();

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


  return (
    <div style = {{ display: 'flex', flexDirection: 'row', padding: 10, marginLeft: '48px', marginRight: '48px',}}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: 10, width: '25%', alignItems: 'center' }}>
        <Sidebar repoOwner={repoOwner}/>
      </div>
      <MainComponent filteredRepositories={filteredRepositories} searchTerm={searchTerm} handleUserInputChange={handleUserInputChange}/>
    </div>
  );
}

export default App;
