import "./css/Login.css";
import "./css/Home.css";
import { useNavigate } from "react-router-dom";
export const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="loginh1">How do you want to use Handyman?</h1>
      <small className="loginsmall">
        We’ll personalize your setup experience accordingly.
      </small>
      <button
        className="provider"
        type="submit"
        onClick={() => {
          props.onSetUser("provider");
          navigate("/Home1");
          //navigate("/login");
        }}
      >
        I'm here to provide service.
      </button>
      <button
        className="customer"
        type="submit"
        onClick={() => {
          props.onSetUser("customer");
          //navigate("/login");
          navigate("/home2");
        }}
      >
        I'm here to consume service.
      </button>
    </div>
  );
};
