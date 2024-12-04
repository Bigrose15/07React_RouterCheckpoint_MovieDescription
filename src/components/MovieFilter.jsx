import React from "react";
import { InputGroup, Form } from "react-bootstrap";

const MovieFilter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div>
      <h3>Filter by:</h3>
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter movie title"
          aria-label="titles"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            onTitleChange(e.target.value);
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
          onChange={(e) => {
            onRatingChange(e.target.value);
          }}
        />
      </InputGroup>
    </div>
  );
};

export default MovieFilter;
