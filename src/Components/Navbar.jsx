import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎬 Movie Production
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/cast">Cast</Link>
        </li>

        <li>
          <Link to="/schedule">Schedule</Link>
        </li>

        <li>
          <Link to="/budget">Budget</Link>
        </li>

        <li>
          <Link to="/timeline">Timeline</Link>
        </li>

        <li>
          <Link to="/reports">Reports</Link>
        </li>

      
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;