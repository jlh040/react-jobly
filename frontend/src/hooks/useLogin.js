import { useState } from 'react';
import JoblyApi from '../api';

const useLogin = () => {
  const [token, setToken] = useState();
  const handleLogin = async (e, formData) => {
    e.preventDefault();
    const respToken = await JoblyApi.login(formData);
    setToken(respToken);
  };

  return [token, handleLogin];
};

export default useLogin;