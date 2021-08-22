import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import UserContext from './userContext';
import useSignUp from './hooks/useSignUp';
import useLogin from './hooks/useLogin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [tokenFromSignUp, handleSignUp] = useSignUp();
  const [tokenFromLogin, handleLogin] = useLogin();

  return (
    <div className="App">
      <UserContext.Provider value={{tokenFromSignUp, handleSignUp, tokenFromLogin, handleLogin}}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
