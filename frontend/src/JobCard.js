import React, { useEffect, useState } from 'react';
import useApplyForJob from './hooks/useApplyForJob';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const JobCard = ({ user, setUser, job, displayCompany }) => {
  const applyForJob = useApplyForJob();
  const [hasApplied, setHasApplied] = useState(user ? user.applications.includes(job.id) : false);
  const handleClick = async () => {
    if (!hasApplied) {
      await applyForJob(user, job);
      setHasApplied(true);
    }
  };
  useEffect(() => {
    if (user && user.applications.includes(job.id)) {
      setHasApplied(true);
    }
  },[user])
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
            <Button onClick={handleClick} color="primary">{hasApplied ? 'Applied' : 'Apply'}</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;