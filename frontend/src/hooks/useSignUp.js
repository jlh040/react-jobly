import { useState } from 'react';
import JoblyApi from '../api';

const useSignUp = () => {
  const [token, setToken] = useState();
  const handleSignUp = async (e, formData) => {
    e.preventDefault();
    const respToken = await JoblyApi.signUp(formData);
    setToken(respToken);
  };

  return [token, handleSignUp];
};

export default useSignUp;