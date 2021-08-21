import React, { useState, useEffect } from 'react';
import JobsList from './JobsList';
import JoblyApi from './api';

const Jobs = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      const res = await JoblyApi.getAllJobs();
      setJobs(res);
      setHasLoaded(true);
    };
    getJobs()
  }, []);

  return (
    <div>
      {hasLoaded ? (
        <JobsList jobs={jobs} setJobs={setJobs} /> 
      ) : <h3>Loading...</h3>}
    </div>
  )
};

export default Jobs;