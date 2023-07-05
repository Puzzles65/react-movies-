import { movies } from "../data.js";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const { movieName } = useParams();

  const selectedMovie = movies.find(movie => movie.title === movieName);

  const { title, releaseDate, posterPath, cast } = selectedMovie;

  return (
    <div>
      <h1>{title}</h1>
      <p>Release Date: {releaseDate}</p>
      <img src={posterPath} alt={title} />
      <p>Cast: {cast.join(", ")}</p>
    </div>
  );
}
