import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


function Nav() {
  return (
    <nav className="nav">
      <h3>LOGO</h3>
      <ul className="navLinks">
        <Link to="/about">
        <li>About</li>
        </Link>
        <Link to="/shop">
        <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
