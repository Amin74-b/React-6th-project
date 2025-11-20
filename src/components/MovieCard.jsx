import { Link } from "react-router-dom";

function MovieCard({ id, title, description, posterURL, rating }) {
  return (
    <Link to={`/movie/${id}`} className="card movie-card" aria-label={title}>
      {posterURL ? (
        <img
          src={posterURL}
          alt={title}
          className="poster"
          onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150x220?text=No+Image")}
        />
      ) : (
        <div className="poster poster-placeholder">{title ? title.charAt(0) : "?"}</div>
      )}

      <div className="card-content">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-desc">{description}</p>
        <p className="movie-rating">⭐ {rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;