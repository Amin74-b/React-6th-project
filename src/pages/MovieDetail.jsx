import { useParams, Link } from "react-router-dom";

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === String(id));

  if (!movie) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <p>Movie not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem" }}>
      <Link to="/">← Back</Link>

      <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem", alignItems: "flex-start" }}>
        <img src={movie.posterURL} alt={movie.title} style={{ width: 220, height: 320, objectFit: "cover", borderRadius: 8 }} />

        <div style={{ flex: 1 }}>
          <h2 style={{ marginTop: 0 }}>{movie.title}</h2>
          <p style={{ color: "#475569" }}>{movie.description}</p>

          <div style={{ marginTop: "1rem" }}>
            <h3>Trailer</h3>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                title={movie.title + " trailer"}
                src={movie.trailerURL}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
