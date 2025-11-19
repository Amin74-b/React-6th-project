import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
const MoviesImage = "./react hooks images/";

function App() {
  // الأفلام
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Interstellar",
      description: "A space masterpiece",
      posterURL: MoviesImage + "movie img.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Inception",
      description: "Dream inside a dream",
      posterURL: MoviesImage + "movie img 2.jpg",
      rating: 4,
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
    <div>
      <h1>🎬 My Movie App</h1>

      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />

      <button onClick={addMovie}>Add Movie</button>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
