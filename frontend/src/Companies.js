import React, { useState, useEffect } from 'react';
import JoblyApi from './api';

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
  }, [])
  return (
    <div>
      {hasLoaded ? companies.map(company => <div>{company.name}</div>) : <h1>Loading...</h1>}
    </div>
  )
};

export default Companies;