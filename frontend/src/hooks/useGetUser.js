import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';

const useGetUser = (tokenFromLogin, tokenFromSignUp) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getInformation = async () => {
      if (!(tokenFromLogin || tokenFromSignUp)) {
        return;
      }
      else {
        user = JoblyApi.getUser(tokenFromSignUp || tokenFromLogin);
      }
    }
  }, [tokenFromLogin, tokenFromSignUp]);

  return user;
};

export default useGetUser;