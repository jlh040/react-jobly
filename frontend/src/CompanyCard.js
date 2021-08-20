import React from 'react';
import { NavLink } from 'react-router-dom'
import {
  Card, CardText, CardBody,
  CardTitle, Button, CardLink
} from 'reactstrap';


const CompanyCard = ({ company }) => {
  return (
    <div>
      <Card className="my-3" color="light">
        <CardBody>
          <CardTitle tag="h5">
            <CardLink tag={NavLink} exact to={`/companies/${company.handle}`}>
              {company.name}
            </CardLink>
          </CardTitle>
          <CardText>{company.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CompanyCard;