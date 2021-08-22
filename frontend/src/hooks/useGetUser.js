import { useState, useEffect } from 'react';

const useGetUser = (tokenFromLogin, tokenFromSignUp, JoblyApi) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getInformation = async () => {
      if (!(tokenFromLogin || tokenFromSignUp)) {
        return;
      }
      else {
        const userResp = await JoblyApi.getUser(tokenFromSignUp || tokenFromLogin);
        JoblyApi.token = tokenFromLogin || tokenFromSignUp;
        setUser(userResp);
      }
    };
    getInformation();
  }, [tokenFromLogin, tokenFromSignUp]);

  return [user, setUser, JoblyApi];
};

export default useGetUser;