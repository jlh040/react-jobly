import { useHistory } from 'react-router-dom';
import JoblyApi from '../api';

const useUserUpdate = (setUser) => {
  const history = useHistory();
  const handleUpdate = async (e, username, formData, setShowMessage) => {
    try {
      e.preventDefault();

      formData.firstName = formData['first-name'];
      formData.lastName = formData['last-name'];
      delete formData.password;
      delete formData['first-name'];
      delete formData['last-name'];

      setUser(await JoblyApi.updateUser(username, formData));
      history.push('/');
    }
    catch(err) {
      let errors = err.map(message => <p>{message}</p>);
      setShowMessage(errors);
    }
    
  };

  return handleUpdate;
};

export default useUserUpdate;