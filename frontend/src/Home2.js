import "./css/Home1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const Home2 = () => {
  return (
    <nav className="navbar">
      <label className="logo">Handyman</label>
      <label htmlFor="check">
        <div className="bars_icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </label>
      <input type="checkbox" id="check"></input>
      <ul>
        <li>
          <Link className="active" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/details">Services</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
