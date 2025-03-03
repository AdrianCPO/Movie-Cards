import { useState } from "react";
import { MovieList } from "./MovieList";

export function MovieCardForm() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [movies, setMovies] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      title,
      rating,
      genre,
      description,
    };
    console.log(newMovie);

    setMovies([...movies, newMovie]);
  }

  console.log(movies);

  function handleDelete(index) {
    setMovies(movies.filter((movie, i) => i !== index));
  }

  function handleReset() {
    setTitle("");
    setRating("");
    setGenre("");
    setDescription("");
  }

  return (
    <section className="movie-card-form">
      <form onSubmit={handleSubmit}>
        <h2 className="title">Movie Card Form</h2>
        <div className="Title">
          <label>Title</label>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="rating">
          <label>Rating</label>
          <input
            type="range"
            min="1"
            max="5"
            value={rating}
            placeholder="Rating"
            onChange={e => setRating(e.target.value)}
          />
          <span>{rating}</span>
        </div>
        <div className="genre">
          <label>Genre:</label>
          <div>
            <select value={genre} onChange={e => setGenre(e.target.value)}>
              <option value={""}>Select Genre</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
        </div>
        <div className="description">
          <label>Description</label>
          <textarea
            type="textarea"
            placeholder="Movie Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="bottons">
          <button className="add" type="submit" onClick={handleSubmit}>
            Add
          </button>
          <button className="clear" type="reset" onClick={handleReset}>
            Clear
          </button>
        </div>
      </form>

      <MovieList movies={movies} onDelete={handleDelete} />
    </section>
  );
}
