import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompanyList from './CompanyList';

const Companies = () => {
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