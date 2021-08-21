import React from 'react';
import SearchBar from './SearchBar';
import JobsList from './JobsList';
import { Container } from 'reactstrap';

const Jobs = () => {
  return (
    <Container>
      <JobsList />
    </Container>
  )
};

export default Jobs;