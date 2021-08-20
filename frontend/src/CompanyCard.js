import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const CompanyCard = ({ company }) => {
  return (
    <div>
      <Card className="my-3">
        <CardImg top width="100%" src={company.logoUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{company.name}</CardTitle>
          <CardText>{company.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CompanyCard;