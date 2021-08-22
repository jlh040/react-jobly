import React from 'react';
import './App.css';
import Routes from './Routes';
import UserContext from './userContext';
import useSignUp from './hooks/useSignUp';
import useLogin from './hooks/useLogin';
import useGetUser from './hooks/useGetUser';
import JoblyApi from './api';

function App() {
  const [tokenFromSignUp, setTokenFromSignUp, handleSignUp] = useSignUp(JoblyApi);
  const [tokenFromLogin, setTokenFromLogin, handleLogin] = useLogin(JoblyApi);
  const [user, setUser] = useGetUser(tokenFromLogin, tokenFromSignUp, JoblyApi);

  return (
    <div className="App">
      <UserContext.Provider value={{
          user, 
          setUser, 
          JoblyApi, 
          tokenFromSignUp, 
          setTokenFromSignUp, 
          handleSignUp, 
          tokenFromLogin, 
          setTokenFromLogin, 
          handleLogin
        }}
      >
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
