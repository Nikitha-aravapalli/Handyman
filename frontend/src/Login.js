import React, { useState, useContext } from "react";
import "./css/CustomerLogin.css";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { store } from "./App";
import Cookies from "js-cookie";
import "./css/background.css";

export const Login = ({ collection, endpoint }) => {
  const [token, setToken] = useContext(store);
  const [email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [userResult, setuserResult] = useState("");
  const [passResult, setpassResult] = useState("");
  //const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleForgot = (e) => {
    e.preventDefault();
    navigate("/forgot");
  };
  //api
  const handleSubmit = (e) => {
    //Cookies.set('userEmail', userEmail, { expires: 7 });
    Cookies.set("Email", email1, { expires: 7 });
    e.preventDefault();
    const user = { email: email1, password: password1 };
    console.log(user.email);
    console.log(user.password);
    const config = {
      headers: { "content-Type": "application/json" },
      withCredentials: true,
    };
    axios
      .post(endpoint, user, config)
      .then((res) => {
        console.log("response sent successfully", res);
        console.log(res.data.token);
        setToken(res.data.token);
        var result = res.data.message1;
        console.log("result is", result);
        if (result === "user") {
          setuserResult(res.data.message);
          console.log(userResult);
        } else if (result === "password") {
          setpassResult(res.data.message);
          //setShowPassword(res.data.message)
          console.log(passResult);
        } else {
          setuserResult("");
          setpassResult("");
        }
        console.log("cookie message", res.data.message);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
    console.log(endpoint);
    console.log(collection);
  };
  if (token) {
    //return <Navigate to="/practise"></Navigate>;
    return <Navigate to="/sample"></Navigate>;
  } else {
    console.log("no token");
  }
  /*const handleshow = () => {
    setShow(!show);
  };*/

  return (
    <div className="home">
      <div className="form-container">
        <h2>Login for {collection}</h2>
        <form className="form-element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email1}
            placeholder="yourmail@gmail.com"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <small value={userResult} className="errorMsg">
            {userResult}
          </small>
          <label htmlFor="password">Password</label>
          {/*<input
            type={show ? "text" : "password"}
            value={password1}
            placeholder="********"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label id="show" onClick={handleshow}>
            show
  </label>*/}
          <input
            type={"password"}
            value={password1}
            placeholder="********"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <small value={passResult} className="errorMsg">
            {passResult}
          </small>
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Login
          </button>
          <button
            type="submit"
            className="forget link-btn"
            onClick={handleForgot}
          >
            Forget Password?
          </button>
        </form>
        <button onClick={() => navigate("/register")} className="link-btn">
          Don't have an account?Register here
        </button>
      </div>
    </div>
  );
};
