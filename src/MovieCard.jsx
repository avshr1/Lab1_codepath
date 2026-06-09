function MovieCard({ title, genre, releaseDate, description }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-genre">🎭 {genre}</p>
      <p className="card-date">📅 {releaseDate}</p>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default MovieCard