import React from 'react';
import SearchBar from './SearchBar';
import CompanyCard from './CompanyCard';
import { Container, Row } from 'reactstrap'

const CompanyList = ({ companies, setCompanies }) => {
  const handleSubmit = () => {
    
  }
  return (
    <Container>
      <SearchBar />
      {companies.map(company => <CompanyCard company={company} />)}
    </Container>
  )
};

export default CompanyList;