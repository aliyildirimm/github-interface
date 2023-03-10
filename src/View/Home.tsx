import React, { useEffect, useState } from 'react';
import { MainComponent } from '../Components/MainComponent';
import { Sidebar } from '../Components/Sidebar';
import { fetchRepoOwner } from '../service/fetch';
import { User } from '../types/User';

type HomeProps = {
    username: string;
}

const Home = ( { username }: HomeProps ) => {
  const [repoOwner, setRepoOwner] = useState<User>();

  useEffect(() => {
    const fetchUser = async() => {
      const data = await fetchRepoOwner(username)
      setRepoOwner(data)
    }
    fetchUser()
    }, [username]);

  return (
    <div style = {{ display: 'flex', flexDirection: 'row', padding: 10, marginLeft: '48px', marginRight: '48px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 10, width: '25%', alignItems: 'center' }}>
          <Sidebar repoOwner={repoOwner}/>
        </div>
        <MainComponent repoOwner={username}/>
  </div>
  );
}

export default Home;


