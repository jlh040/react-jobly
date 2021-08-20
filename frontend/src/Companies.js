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
      {hasLoaded ?  <CompanyList companies={companies}/> : <h1>Loading...</h1>}
    </div>
  )
};

export default Companies;