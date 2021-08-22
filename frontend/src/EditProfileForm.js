import React, { useState, useContext } from 'react';
import UserContext from './userContext';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import './EditProfileForm.css';

const EditProfileForm = () => {
  const { user, handleUpdate } = useContext(UserContext);
  const initialState = { 
    password: '', 
    'first-name': user ? user.firstName : '', 
    'last-name': user ? user.lastName : '', 
    email: user ? user.email : '' 
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = e => {
    setFormData(fData => ({
      ...fData,
      [e.target.name]: e.target.value
    }))
  };

  return (
    <Container className="EditProfileForm">
      <Form onSubmit={e => handleUpdate(e, user.username, formData)} className="EditProfileForm-form">
        <FormGroup row>
          <Col sm={{size: 6, offset: 3}}>
            <h2>Profile</h2>
            <hr/>
            <Label className="EditProfileForm-label" for="username">Username</Label>
            {user ? <h6>{user.username}</h6> : ''}
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="EditProfileForm-label" for="first-name">First name</Label>
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
            <Label className="EditProfileForm-label" for="last-name">Last name</Label>
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
            <Label className="EditProfileForm-label" for="email">Email</Label>
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
        <div className="EditProfileForm-button">
            <Button color="primary">Submit</Button>
        </div>
      </Form>
    </Container>
  )
};

export default EditProfileForm;
