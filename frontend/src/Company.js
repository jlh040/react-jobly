import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';

const Company = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [company, setCompany] = useState({});
  const { handle } = useParams()
  useEffect(() => {
    const getAndReload = async (companyHandle) => {
      const res = await JoblyApi.getCompany(companyHandle);
      setCompany(res);
      setHasLoaded(true);
    };
    getAndReload(handle)
  })
  return (
    <div>
      <h1>Company page!</h1>
      {hasLoaded ? <h1>{company.name}</h1>: <h3>Loading...</h3>} 
    </div>
  )
};

export default Company;