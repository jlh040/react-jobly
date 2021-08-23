import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const JobCard = ({ job, displayCompany, title, salary, equity }) => {
  return (
    <div>
      <Card className="my-4">
        <CardBody>
          <CardTitle tag="h5">{ job ? job.title : title }</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Salary: { job ? job.salary : salary }</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Equity: { job ? job.equity : equity }</CardSubtitle>
          <CardText>
            { displayCompany ? job.companyName : '' }
          </CardText>
          <div>
            <Button onClick={handleClick} color="primary">Apply</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;