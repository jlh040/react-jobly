import { useState } from 'react';

const useSignUp = (JoblyApi) => {
  const [token, setToken] = useState();
  const handleSignUp = async (e, formData) => {
    e.preventDefault();
    const respToken = await JoblyApi.signUp(formData);
    JoblyApi.token = respToken;
    setToken(respToken);
  };

  return [token, handleSignUp];
};

export default useSignUp;