import React, { useContext } from 'react';
import UserContext from './userContext';
import SearchBar from './SearchBar';
import { Container } from 'reactstrap';
import JobCard from './JobCard';

const JobsList = ({ jobs, setJobs }) => {
  const { JoblyApi } = useContext(UserContext)
  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    const jobs = await JoblyApi.searchForJobs(formData.search);
    setJobs(jobs);
  }
  return (
    <Container >
      <SearchBar handleSubmit={handleSubmit} />
      {jobs.map(job => <JobCard job={job} displayCompany />)}
    </Container>
  )
};

export default JobsList;