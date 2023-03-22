function Movie({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.medium_cover_image} />
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movie;
