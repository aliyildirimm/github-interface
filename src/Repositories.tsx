import React, { useEffect, useState } from 'react';
import { fetchRepositories } from './service/fetch';

type RepositoriesProps = {
  repos: any
}

const Repositories = (props: RepositoriesProps ) => {
  const repositories = props.repos

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', alignItems: 'left', }}>
      {repositories.map((repo: any) => (
        <div key={repo.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'left', justifyContent: 'space-between'}}>
          <h1>{repo.name}</h1>
          <h1>{repo.description}</h1>
        </div>
      ))}
    </div>
  );
}

export default Repositories;
