import React from 'react';
import SearchBar from './SearchBar';
import { Container } from 'reactstrap';
import JobCard from './JobCard';

const JobsList = ({ jobs, setJobs }) => {
  return (
    <Container >
      <SearchBar />
      {jobs.map(job => <JobCard job={job} displayCompany />)}
    </Container>
  )
};

export default JobsList;