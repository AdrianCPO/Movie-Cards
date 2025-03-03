import React from "react";
import { MovieCard } from "./MovieCard";

export function MovieList({ movies, onDelete }) {
  return (
    <form>
      {movies.map((movie, index) => (
        <ul key={index}>
          <MovieCard movie={movie} />
          <button onClick={() => onDelete(index)}>Delete</button>
        </ul>
      ))}
    </form>
  );
}
