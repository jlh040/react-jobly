import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const JobCard = ({ job, displayCompany }) => {
  const [hasApplied, setHasApplied] = useState(false);
  return (
    <div>
      <Card className="my-4">
        <CardBody>
          <CardTitle tag="h5">{ job.title }</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Salary: { job.salary }</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Equity: { job.equity }</CardSubtitle>
          <CardText>
            { displayCompany ? job.companyName : '' }
          </CardText>
          <div>
            <Button color="primary">{hasApplied ? 'Applied' : 'Apply'}</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;