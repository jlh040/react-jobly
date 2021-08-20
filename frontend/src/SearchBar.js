import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';

const SearchBar = () => {
  const [formData, setFormData] = useState({search: ''});
  const handleChange = e => {
    setFormData(fData => ({
      search: e.target.value
    }))
  }
  return (
    <Form className="mt-5 mb-3" inline>
      <FormGroup>
      <Input
        type="search"
        value={formData.search}
        placeholder="Enter search term.."
        onChange={handleChange}
      />
      </FormGroup>
      <Button className="mt-3">Search</Button>
    </Form>
  )
};

export default SearchBar;