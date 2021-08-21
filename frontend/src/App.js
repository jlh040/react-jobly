import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import './App.css';
import Routes from './Routes';
import UserContext from './userContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const handleSignUp = async (e, formData) => {
    e.preventDefault();
    const respToken = await JoblyApi.signUp(formData);
    setToken(respToken);
  }
  return (
    <div className="App">
      <UserContext.Provider value={{token, handleSignUp}}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
