import { Link } from "react-router-dom";

function MovieCard({ id, title, description, posterURL, rating }) {
  return (
    <Link to={`/movie/${id}`} className="card movie-card" role="link" aria-label={title}>
      <img src={posterURL} alt={title} className="poster" />

      <div className="card-content">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-desc">{description}</p>
        <p className="movie-rating">⭐ {rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;