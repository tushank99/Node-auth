import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Workout Buddy
        </Link>
        <nav>
          <div className="nav-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link signup-btn">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
