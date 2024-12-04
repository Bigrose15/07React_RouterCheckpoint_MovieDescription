import React from "react";
import { Card, Button } from "react-bootstrap";

const Movie = ({ title, description, rating, imgURL }) => {
  return (
    <Card
      style={{
        height: "350px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "5px",
        paddingRight: "5px",
        backgroundColor: "orange",
        color: "white",
      }}
    >
      <Card.Body
        style={{
          fontSize: "0.7rem",
          height: "300px",
          paddingTop: "5px",
          backgroundColor: "black",
        }}
      >
        <Card.Title style={{ fontSize: "0.7rem" }}>{title}</Card.Title>
        {/* Image with object-fit to cover and maintain aspect ratio */}
        <Card.Img
          src={imgURL}
          alt={title}
          style={{
            width: "100%", // Make the image take the full width of the container
            height: "200px", // Set a fixed height for the image
            objectFit: "fit-cover", // Ensures the image covers the area without distortion
            // objectPosition: "center", // Ensures the image is centere
          }}
          className="movie-image"
        />
        <Card.Text
          style={{
            fontSize: "0.6rem",
            marginBottom: "3px",
            marginTop: "10px",
            paddingBottom: "2px",
            height: "60px",
          }}
        >
          <span>
            <strong>Description: &nbsp;</strong>
          </span>
          {description}
        </Card.Text>
        <Card.Text
          style={{
            color: "orange",
            paddingBottom: "2px",
            marginBottom: "2px",
            display: "flex",
            flexDirection: "row", // Align text and button in a row
            justifyContent: "space-between", // Align text and button at opposite ends
            alignItems: "center", // Ensure button aligns vertically with text
          }}
        >
          Rating: {rating}
          <Button
            className="watch-button"
            style={{
              backgroundColor: "orange",
              borderColor: "none",
              border: "none",
              width: "30%",
              fontSize: "0.7rem",
              padding: "2px",
              marginTop: "2px",
              marginLeft: "80px", // Add some space between text and button
            }}
          >
            Watch Now
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
