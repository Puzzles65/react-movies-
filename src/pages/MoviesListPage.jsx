import { Link } from "react-router-dom";
import { movies } from "../data.js";
import './MoviesListPage.css';


export default function MoviesListPage(){
    const MovieCard = movies.map(movie => 
    <div class="card-container" key={movie.title}>
        <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
            <img 
                src={movie.posterPath}
                alt={movie.title}
            />
            <div class="card-title">
            <h1>{movie.title}</h1>
            <p>Released:{movie.releaseDate}</p>
            </div>
        </Link>
    </div>
    )

    return (
        <div class="card-main">{MovieCard}</div>    
    )
}