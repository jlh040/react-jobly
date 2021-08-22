import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import UserContext from './userContext';
import useSignUp from './hooks/useSignUp';
import useLogin from './hooks/useLogin';
import useGetUser from './hooks/useGetUser';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenFromSignUp, handleSignUp] = useSignUp();
  const [tokenFromLogin, handleLogin] = useLogin();
  const [user, setUser] = useGetUser(tokenFromLogin, tokenFromSignUp);

  return (
    <div className="App">
      <UserContext.Provider value={{user, tokenFromSignUp, handleSignUp, tokenFromLogin, handleLogin}}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
