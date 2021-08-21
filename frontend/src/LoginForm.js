import React from 'react';
import './LoginForm.css';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const LoginForm = () => {
  return (
    <Container className="LoginForm">
      <Form className="LoginForm-form">
        <FormGroup row>
          <Col sm={{size: 6, offset: 3}}>
            <h2>Log In</h2>
            <Label className="LoginForm-label" for="username">Username</Label>
            <Input type="text" name="username" id="username" placeholder="Username" />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="LoginForm-label" for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  )
};

export default LoginForm;
