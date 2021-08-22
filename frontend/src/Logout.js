import React, { useContext } from 'react';
import UserContext from './userContext';
import { useHistory, Redirect } from 'react-router-dom';

const Logout = () => {
  let { tokenFromLogin, setTokenFromLogin, tokenFromSignUp, setTokenFromSignUp } = useContext(UserContext);
  if (tokenFromLogin) {
    setTokenFromLogin(null);
  }
  else if (tokenFromSignUp) {
    setTokenFromSignUp(null);
  }

  return <Redirect to="/" />
};

export default Logout;