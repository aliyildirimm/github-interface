import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Octokit } from "octokit";
import { fetchRepositories } from './service/fetch';

const App = () => {
  const [repositories, setRepositories] = useState<any>([]);
  useEffect(() => {
    const fetchRepositoriessss = async() => {
      const data = await fetchRepositories() as any []
      setRepositories(data)
    }
    fetchRepositoriessss()
    }, []);

  return (
    <div className="App">
      {repositories.map((repo: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <div key={repo.id}>
          <h1>{repo.name}</h1>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
