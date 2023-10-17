import "./css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export const Contact = () => {
  return (
    <div id="contact">
      <h3 className="contact-heading">Contact us</h3>
      <div className="icons-container">
        <div className="icon">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <a href="www.google.com">
          <div className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </a>
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      <footer className="foot">
        <p>&#169;Handyman | All rights reserved</p>
      </footer>
    </div>
  );
};
