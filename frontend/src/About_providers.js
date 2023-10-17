import "./css/About.css";
import { useNavigate } from "react-router-dom";
export const About_providers = () => {
  const navigate = useNavigate();
  const details = () => {
    console.log("button clicked");
    navigate("/details");
  };
  return (
    <div id="about">
      {/*<img src="../images/about.webp" alt="no image"></img>*/}
      <div id="background-overlay">
        <div id="contents">
          <h3 className="headline">You are Your Home</h3>
          <h5 className="subheadline">No work is small or big...</h5>
          <p>
            Welcome to Handyman services, where craftsmanship meets care. We're
            more than just a handyman service; we're your partners in creating
            spaces that stand the test of time.
          </p>
          <p>
            Being a handyman is more than just fixing things. It's about making
            a difference in people's lives.
          </p>
          <button id="register" onClick={details}>
            Register as Handyman
          </button>
        </div>
      </div>
    </div>
  );
};
