import "./css/About.css";
import { useNavigate } from "react-router-dom";
export const About_customers1 = () => {
  const navigate = useNavigate();
  const services = () => {
    console.log("button clicked");
    navigate("/services");
  };
  return (
    <div id="about">
      {/*<img src="../images/about.webp" alt="no image"></img>*/}
      <div id="background-overlay">
        <div id="contents">
          <h3 className="headline">It's your home</h3>
          <h5 className="subheadline">Not just any handyman will do...</h5>
          <p>
            Welcome to Handyman services, we believe in putting you, our valued
            customer, at the heart of everything we do. Our journey began with a
            simple goal: to provide solutions that enhance your life and make
            things a little bit easier.
          </p>
          <p>
            We understand that you have unique needs, and we're here to meet
            them with the utmost care and dedication.
          </p>
          <button id="register" onClick={services}>
            Services we offer
          </button>
        </div>
      </div>
    </div>
  );
};
