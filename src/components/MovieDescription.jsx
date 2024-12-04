import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Movies from "../Movies"; // Import the movie data

const MovieDescription = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const navigate = useNavigate(); // Hook to navigate back to the home page

  const movie = Movies.find((movie) => movie.id === parseInt(id)); // Find the movie by ID

  if (!movie) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Movie not found!</h2>
        {/* Add Back to Home button here */}
        <div style={{ marginTop: "20px" }}>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const { title, description, rating, trailerLink, imgURL } = movie;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>{title}</h3>
      <img
        src={imgURL}
        alt={title}
        style={{ width: "200px", height: "auto" }}
      />
      <p>Rating: {rating}</p>
      <p>{description}</p>
      <h5>Watch Trailer:</h5>
      <iframe
        width="auto"
        height="auto"
        src={trailerLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div style={{ marginTop: "20px" }}>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default MovieDescription;

// Explanation:

// useParams(): This hook extracts the id of the movie from the URL.
// useNavigate(): This hook is used to programmatically navigate back to the home page (/).
// movie.find(): This finds the movie by ID from the Movies object.
// We render the movie's details, including the title, description, rating, and an embedded YouTube trailer using the trailerLink.
