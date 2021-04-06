import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to='/'>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/tv'>TV</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/movie'>MOVIE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/search'>SEARCH</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;