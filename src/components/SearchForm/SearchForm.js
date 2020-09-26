import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchForm() {
  return (
    <Form inline>
      <Form.Group controlId="formBasicEmail" className="mx-md-2">
        <Form.Label className="mx-md-2">Search By Name: </Form.Label>
        <Form.Control type="email" placeholder="Enter name" className="mx-md-2" />
        <Button variant="primary" type="submit" className="mx-md-2">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;