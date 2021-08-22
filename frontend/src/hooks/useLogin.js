import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useLogin = (JoblyApi) => {
  const history = useHistory();
  const [token, setToken] = useState();
  const handleLogin = async (e, formData) => {
    e.preventDefault();
    const respToken = await JoblyApi.login(formData);
    JoblyApi.token = respToken;
    setToken(respToken);
    history.push('/')
  };

  return [token, setToken, handleLogin];
};

export default useLogin;