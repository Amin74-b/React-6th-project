import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route } from "react-router-dom";
// Use an absolute path so images resolve correctly on nested routes
const MoviesImage = "/react hooks images/";

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

  // helper: normalize YouTube links to embed url
  const normalizeTrailerURL = (url) => {
    if (!url) return "";
    try {
      const u = url.trim();
      // if already embed
      if (u.includes("/embed/")) return u;
      // youtu.be short link
      const short = u.match(/youtu\.be\/(.+)$/);
      if (short) return `https://www.youtube.com/embed/${short[1]}`;
      // standard watch?v=
      const watch = u.match(/[?&]v=([^&]+)/);
      if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
      // if it's just an id-like string (11 chars)
      if (/^[A-Za-z0-9_-]{11}$/.test(u)) return `https://www.youtube.com/embed/${u}`;
      // otherwise return as-is (may be an embed-capable url)
      return u;
    } catch (e) {
      return "";
    }
  };

  // إضافة فيلم جديد (asks for trailer URL too, normalizes it)
  const addMovie = () => {
    const title = prompt("Movie title?") || "Untitled";
    const description = prompt("Description?") || "";
    const poster = prompt("Poster URL?") || "";
    const ratingRaw = prompt("Rating? (0-5)") || "0";
    const rating = Number(ratingRaw) || 0;
    const trailerInput = prompt("Trailer URL (YouTube link or id)?") || "";
    const trailerURL = normalizeTrailerURL(trailerInput);

    const newMovie = {
      id: movies.length + 1,
      title,
      description,
      posterURL: poster,
      rating,
      trailerURL,
    };

    setMovies((prev) => [...prev, newMovie]);
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
