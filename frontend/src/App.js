import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import UserContext from './userContext';
import useSignUp from './hooks/useSignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [token, handleSignUp] = useSignUp();

  return (
    <div className="App">
      <UserContext.Provider value={{token, handleSignUp}}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
