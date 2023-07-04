import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
        <Link to="/">MoviesListPage</Link>
        | 
        <Link to="/actors">ActorsListPage</Link>
        </nav>
    )
}