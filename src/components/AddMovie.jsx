import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const AddMovie = ({ onAddMovie }) => {
  const [inputValues, setInputValue] = useState({
    title: "",
    description: "",
    rating: "",
  });
  const submitHandler = (e) => {
    //e.preventDefault() prevents the default behavior of the form which is to refresh the page when the form is submitted. it helps to prevent the page from refreshing when the form is submitted.
    e.preventDefault();
    onAddMovie(inputValues);
    //reset the input values to empty strings after the form is submitted.
    setInputValue({
      title: "",
      description: "",
      rating: "",
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      <h3>Add New Movie:</h3>
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter movie title"
          aria-label="titles"
          aria-describedby="basic-addon1"
          value={inputValues.title}
          onChange={(e) => {
            setInputValue({ ...inputValues, title: e.target.value });
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
        <Form.Control
          placeholder="Enter movie description"
          aria-label="description"
          aria-describedby="basic-addon1"
          value={inputValues.description}
          onChange={(e) => {
            setInputValue({ ...inputValues, description: e.target.value }); //this line of code is updating the description property of the inputValues object with the value that was entered by the user.
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Rating</InputGroup.Text>
        <Form.Control
          type="number"
          min={1}
          max={10}
          step={1}
          placeholder="Enter movie rating"
          aria-label="rating"
          aria-describedby="basic-addon1"
          value={inputValues.rating}
          onChange={(e) => {
            setInputValue({ ...inputValues, rating: e.target.value });
          }}
        />
      </InputGroup>
      <Button variant="primary" type="submit">
        Add Movie
      </Button>
    </Form>
  );
};

export default AddMovie;
