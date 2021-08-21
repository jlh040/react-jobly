import React from 'react';
import JoblyApi from './api';
import SearchBar from './SearchBar';
import CompanyCard from './CompanyCard';
import { Container } from 'reactstrap'

const CompanyList = ({ companies, setCompanies }) => {
  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    const filteredCompanies = await JoblyApi.searchForCompanies(formData.search);
    setCompanies(filteredCompanies);
  }
  return (
    <Container>
      <SearchBar handleSubmit={handleSubmit} />
      {companies.map(company => <CompanyCard company={company} />)}
    </Container>
  )
};

export default CompanyList;