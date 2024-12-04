import Movielist from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import AddMovie from "./components/AddMovie";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Movies from "./Movies";
import MovieDescription from "./components/MovieDescription"; // Import the new component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components

function App() {
  const [originalMovies, setOriginalMovies] = useState(Movies);
  const [filteredMovies, setFilteredMovies] = useState(originalMovies);
  const [filterTitle, setFilterTiltle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  useEffect(() => {
    const filter = originalMovies.filter((eachmovie) => {
      const matchesTitle = filterTitle
        ? eachmovie.title.toLowerCase().includes(filterTitle.toLowerCase())
        : true;
      const matchesRating = filterRating
        ? eachmovie.rating === filterRating
        : true;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filter);
  }, [originalMovies, filterRating, filterTitle]);

  const titleChangeHandler = (title) => {
    title ? setFilterTiltle(title) : setFilterTiltle("");
  };

  const ratingChangeHandler = (rating) => {
    rating ? setFilterRating(Number(rating)) : setFilterRating(0);
  };

  const addNewMovie = (newMovie) => {
    setOriginalMovies([...originalMovies, newMovie]);
  };

  return (
    <Router>
      <Container>
        <AddMovie onAddMovie={addNewMovie} />
        <MovieFilter
          onTitleChange={titleChangeHandler}
          onRatingChange={ratingChangeHandler}
        />
        <Routes>
          <Route path="/" element={<Movielist movies={filteredMovies} />} />
          <Route path="/movie/:id" element={<MovieDescription />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
