import React, { useState }  from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './View/Home';
import { Login } from './View/Login';
import { SearchBarEvent } from './types/SearchBarEvent';

const App = () => {
  const [username, setUsername] = useState<string>('');
  const handleInputChange = (event: SearchBarEvent) => {
      setUsername(event.target.value)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login username={username} handleInputChange={handleInputChange} />} />
        <Route path="/home" element={<Home username={username}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
