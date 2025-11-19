function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="card movie-card" role="article" aria-label={title}>
      <img src={posterURL} alt={title} className="poster" />

      <div className="card-content">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-desc">{description}</p>
        <p className="movie-rating">⭐ {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;