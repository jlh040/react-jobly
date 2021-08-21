import React from 'react';
import './SignUpForm.css';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const SignUpForm = () => {
  return (
    <Container className="SignUpForm">
      <Form className="SignUpForm-form">
        <FormGroup row>
          <Col sm={{size: 6, offset: 3}}>
            <h2 style={{'text-align': 'center'}}>Sign Up</h2>
            <Label className="SignUpForm-label" for="username">Username</Label>
            <Input type="text" name="username" id="username" placeholder="Username" />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="first-name">First name</Label>
            <Input type="text" name="first-name" id="first-name" placeholder="First name" />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="last-name">Last name</Label>
            <Input type="text" name="last-name" id="last-name" placeholder="Last name" />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <div className="SignUpForm-button">
            <Button color="primary">Submit</Button>
        </div>
      </Form>
    </Container>
  )
};

export default SignUpForm;
