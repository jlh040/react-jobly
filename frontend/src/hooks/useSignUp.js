import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useSignUp = (JoblyApi) => {
  const history = useHistory();
  const [token, setToken] = useState();
  const handleSignUp = async (e, formData) => {
    e.preventDefault();
    const respToken = await JoblyApi.signUp(formData);
    JoblyApi.token = respToken;
    setToken(respToken);
    history.push('/');
  };

  return [token, handleSignUp];
};

export default useSignUp;