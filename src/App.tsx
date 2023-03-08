import React, { useEffect, useState } from 'react';
import './App.css';
import Repositories from './Repositories';
import SearchBar from './SearchBar';
import { fetchRepositories } from './service/fetch';

const App = () => {
  const [repositories, setRepositories] = useState<any>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  useEffect(() => {
    const fetchAllRepos = async() => {
      const data = await fetchRepositories()
      setRepositories(data)
      setFilteredRepositories(data)
    }
    fetchAllRepos()
    }, []);

  const handleUserInputChange = (event: any) => {
    const input = event.target.value;
    setSearchTerm(input.toLowerCase())
    const filteredRepos = repositories.filter((repo: any) => repo.name.toLowerCase().includes(input))
    setFilteredRepositories(filteredRepos)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SearchBar searchTerm={searchTerm} handleInputChange={handleUserInputChange}/>
      <Repositories repos={filteredRepositories}/>
    </div>
  );
}

export default App;
