import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchForm(props) {
  return (
    <Form inline>
      <Form.Group controlId="formBasicEmail" className="mx-md-2">
        <Form.Label className="mx-md-2">Search By Name: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          className="mx-md-2"
          name="search"
          value={props.value}
          onChange={props.handleInputChange}
        />
        <Button
          variant="primary"
          type="submit"
          className="mx-md-2"
          onClick={props.handleFormSubmit}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;