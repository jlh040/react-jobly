import React, { useState } from 'react';
import './LoginForm.css';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const LoginForm = () => {
  const initialState = { username: '', password: ''};
  const [formData, setFormData] = useState(initialState);
  const handleChange = e => {
    setFormData(fData => ({
      ...fData,
      [e.target.name]: e.target.value
    }))
  };
  
  return (
    <Container className="LoginForm">
      <Form className="LoginForm-form">
        <FormGroup row>
          <Col sm={{size: 6, offset: 3}}>
            <h2>Log In</h2>
            <Label className="LoginForm-label" for="username">Username</Label>
            <Input 
              type="text" 
              name="username" 
              id="username" 
              value={formData.username} 
              onChange={handleChange} 
              placeholder="Username" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="LoginForm-label" for="password">Password</Label>
            <Input 
              type="password" 
              name="password" 
              id="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Password" 
            />
          </Col>
        </FormGroup>
        <div className="LoginForm-button">
          <Button color="primary">Submit</Button>
        </div>
      </Form>
    </Container>
  )
};

export default LoginForm;
