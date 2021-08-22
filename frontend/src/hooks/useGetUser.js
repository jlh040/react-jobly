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
        const userResp = await JoblyApi.getUser(tokenFromSignUp || tokenFromLogin);
        setUser(userResp);
      }
    };
    getInformation();
  }, [tokenFromLogin, tokenFromSignUp]);

  return [user, setUser];
};

export default useGetUser;