import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const homeClass = location.pathname === "/" ? "active nav-item" : "nav-item";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          🪑 Chair Issue
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                All Chairs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Add New
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-success">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
