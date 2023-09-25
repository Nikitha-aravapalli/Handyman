import "./css/Home1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./css/background.css";
import { Slider } from "./Slider.js";
export const Home1 = () => {
  useEffect(() => {
    document.body.className = "home";
    return () => {
      document.body.className = "";
    };
  }, []);
  return (
    <div className="home">
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
            <Link to="/details">My Profile</Link>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <Slider />
    </div>
  );
};
