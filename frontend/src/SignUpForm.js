import React, { useState } from 'react';
import './SignUpForm.css';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const SignUpForm = () => {
  const initialState = { username: '', password: '', 'first-name': '', 'last-name': '', email: '' };
  const [formData, setFormData] = useState(initialState);
  const handleChange = e => {
    setFormData(fData => ({
      ...fData,
      [e.target.name]: e.target.value
    }))
  };
  
  return (
    <Container className="SignUpForm">
      <Form className="SignUpForm-form">
        <FormGroup row>
          <Col sm={{size: 6, offset: 3}}>
            <h2 style={{'text-align': 'center'}}>Sign Up</h2>
            <Label className="SignUpForm-label" for="username">Username</Label>
            <Input 
              type="text" 
              name="username" 
              value={formData.username} 
              id="username"
              onChange={handleChange} 
              placeholder="Username" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="password">Password</Label>
            <Input 
              type="password" 
              name="password" 
              value={formData.password} 
              id="password"
              onChange={handleChange} 
              placeholder="Password" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="first-name">First name</Label>
            <Input 
              type="text" 
              name="first-name" 
              value={formData['first-name']} 
              id="first-name"
              onChange={handleChange} 
              placeholder="First name" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="last-name">Last name</Label>
            <Input 
              type="text" 
              name="last-name" 
              value={formData['last-name']} 
              id="last-name"
              onChange={handleChange} 
              placeholder="Last name" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="email">Email</Label>
            <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            id="email"
            onChange={handleChange} 
            placeholder="Email" 
          />
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
