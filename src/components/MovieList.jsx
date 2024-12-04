import React from "react";
import Movie from "./Movie";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for routing

const Movielist = ({ movies }) => {
  return (
    <Row style={{ rowGap: "10px" }}>
      {movies.map((eachMovie) => {
        return (
          <Col xs={12} md={6} lg={3} key={eachMovie.id}>
            <Link
              to={`/movie/${eachMovie.id}`}
              style={{ textDecoration: "none" }}
            >
              <Movie
                title={eachMovie.title}
                description={eachMovie.description}
                imgURL={eachMovie.imgURL}
                rating={eachMovie.rating}
              />
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};
export default Movielist;
