import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
