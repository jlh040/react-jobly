import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import {
  Card, CardText, CardBody,
  CardTitle, Button, CardLink
} from 'reactstrap';

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
      <h1>Company page!</h1>
      {hasLoaded ? (
        <div>
        <Card className="my-3" color="light">
          <CardBody>
            <CardTitle tag="h5">
              {company.name}
            </CardTitle>
            <CardText>{company.description}</CardText>
          </CardBody>
        </Card>
        </div>
      ) : <h4>Loading...</h4>} 
    </div>
  )
};

export default Company;