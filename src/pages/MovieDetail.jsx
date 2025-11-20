import { useParams, Link } from "react-router-dom";

const normalizeTrailerURL = (url) => {
  if (!url) return "";
  const u = url.trim();
  if (u.includes("/embed/")) return u;
  const short = u.match(/youtu\.be\/(.+)$/);
  if (short) return `https://www.youtube.com/embed/${short[1]}`;
  const watch = u.match(/[?&]v=([^&]+)/);
  if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
  if (/^[A-Za-z0-9_-]{11}$/.test(u)) return `https://www.youtube.com/embed/${u}`;
  return u;
};

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies && Array.isArray(movies) ? movies.find((m) => String(m.id) === String(id)) : undefined;

  // Debug logging to help diagnose why content might be empty
  // (visible in browser devtools console)
  // eslint-disable-next-line no-console
  console.log("MovieDetail debug:", { id, moviesLength: movies ? movies.length : undefined, found: !!movie, movie });

  if (!movie) {
    return (
      <div className="detail-empty" style={{ padding: 24, textAlign: "center" }}>
        <h2>Movie not found</h2>
        <p>Requested id: <strong>{id}</strong></p>
        <p>Movies available: <strong>{movies ? movies.length : 0}</strong></p>
        <p>If you navigated directly to this URL, try opening the home page first and then clicking a card.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  const trailer = normalizeTrailerURL(movie.trailerURL);

  return (
    <main className="movie-detail">
      <div className="detail-header">
        <Link to="/" className="back-link">← Back</Link>
      </div>

      <div className="detail-body">
        {movie.posterURL ? (
          <img
            src={movie.posterURL}
            alt={movie.title}
            className="detail-poster"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/220x320?text=No+Image")}
          />
        ) : (
          <div className="detail-poster placeholder">No image</div>
        )}

        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p className="detail-desc">{movie.description}</p>

          <div className="detail-trailer">
            <h3>Trailer</h3>
            {trailer ? (
              <div className="video-wrapper">
                <iframe
                  title={movie.title + " trailer"}
                  src={trailer}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <p>No trailer available.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieDetail;
