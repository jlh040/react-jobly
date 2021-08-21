import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import JobCard from './JobCard';

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
  });
  
  return (
    <div>
      <div>
        <h2>{company.name}</h2>
        <p><i>{company.description}</i></p>
      </div>
      <div>
        {hasLoaded ? (
          company.jobs.map(job => <JobCard title={job.title} salary={job.salary} equity={job.equity} />)
        ) : <h4>Loading...</h4>} 
      </div>
    </div>
  )
};

export default Company;