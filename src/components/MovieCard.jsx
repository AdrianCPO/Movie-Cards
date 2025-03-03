import React from "react";

export function MovieCard({ movie }) {
  if (
    !movie ||
    !movie.title ||
    !movie.rating ||
    !movie.genre ||
    !movie.description
  ) {
    return <p>Laddar filminformation...</p>;
  }
  return (
    <section id="movie-card-box" MovieCard movie={movie}>
      <p id="movie-card-title"> {movie.title}</p>
      <p id="movie-card-genre"> {movie.genre}</p>
      <p id="movie-card-rating">{movie.rating}</p>
      <p id="movie-card-description"> {movie.description}</p>
    </section>
  );
}
