import "./css/Home1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./css/background.css";
import { Slider } from "./Slider.js";
import { About_providers } from "./About_providers.js";
import "./css/Contact.css";
import { Contact } from "./Contact.js";
{
  /*import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
*/
}
export const Home1 = () => {
  useEffect(() => {
    document.body.className = "home";
    return () => {
      document.body.className = "";
    };
  }, []);
  return (
    <div className="home" id="home">
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
            <Link className="active" to="#home">
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
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Slider />
      <About_providers />
      <Contact />
      {/*<div>
        <h3 className="contact">Contact us</h3>
        <div className="icons-container">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faTwitter} />
  </div>
  </div>*/}
    </div>
  );
};
