import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route } from "react-router-dom";
const MoviesImage = "./react hooks images/";

function App() {
  // الأفلام
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Interstellar",
      description: "A space masterpiece about time, love and relativity.",
      posterURL: MoviesImage + "movie img.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 2,
      title: "Inception",
      description: "A heist inside the architecture of the mind.",
      posterURL: MoviesImage + "movie img 2.jpg",
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
  ]);

  // قيم الفلترة
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  // فلترة الأفلام
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= rateFilter
  );

  // إضافة فيلم جديد
  const addMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: prompt("Movie title?"),
      description: prompt("Description?"),
      posterURL: prompt("Poster URL?"),
      rating: Number(prompt("Rating?")),
    };

    setMovies([...movies, newMovie]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>🎬 My Movie App</h1>

            <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />

            <button onClick={addMovie}>Add Movie</button>

            <MovieList movies={filteredMovies} />
          </div>
        }
      />

      <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
    </Routes>
  );
}

export default App;
