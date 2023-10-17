import "./css/Home1.css";
import "./css/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { About_customers1 } from "./About_customers1";
import { Slider } from "./Slider";
import "./css/Contact.css";
import { Contact } from "./Contact.js";
export const Home2 = () => {
  return (
    <div>
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
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about1">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <Slider />
      <About_customers1 />
      <Contact />
    </div>
  );
};
