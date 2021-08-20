import React from 'react';
import CompanyCard from './CompanyCard';
import { Container, Row } from 'reactstrap'

const CompanyList = ({ companies }) => {
  return (
    <Container>
      {companies.map(company => <CompanyCard company={company} />)}
    </Container>
  )
};

export default CompanyList;