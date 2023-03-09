import React, { useEffect, useState } from 'react';
import './App.css';
import Repositories from './Repositories';
import SearchBar from './SearchBar';
import { fetchRepositories } from './service/fetch';
import { GithubRepos } from './types/GithubRepos';
import { SearchBarEvent } from './types/SearchBarEvent';

const App = () => {
  const [repositories, setRepositories] = useState<GithubRepos[]>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<GithubRepos[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

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
    <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
      <SearchBar searchTerm={searchTerm} handleInputChange={handleUserInputChange}/>
      <Repositories repositories={filteredRepositories}/>
    </div>
  );
}

export default App;
