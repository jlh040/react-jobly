import React, { useContext, useState } from 'react';
import UserContext from './userContext';
import './LoginForm.css';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const LoginForm = () => {
  const { user, tokenFromLogin: token, handleLogin } = useContext(UserContext);
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
      <Form onSubmit={e => handleLogin(e, formData)} className="LoginForm-form">
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
      {token ? <h1>{token}</h1> : <h1>No token</h1>}
      {user ? <h1>{user.email}</h1> : <h1>No user</h1>}
    </Container>
  )
};

export default LoginForm;
