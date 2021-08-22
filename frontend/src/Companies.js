import React, { useState, useEffect, useContext } from 'react';
import UserContext from './userContext';
import CompanyList from './CompanyList';

const Companies = () => {
  const { JoblyApi, user } = useContext(UserContext);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const getCompanies = async () => {
      const res = await JoblyApi.getAllCompanies();
      setCompanies(res);
      setHasLoaded(true);
    };
    getCompanies()
  }, []);

  return (
    <div>
      {hasLoaded ? (
        <CompanyList companies={companies} setCompanies={setCompanies} /> 
      ) : <h3>Loading...</h3>}
    </div>
  )
};

export default Companies;