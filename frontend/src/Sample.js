import { store } from "./App";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Sample = () => {
  const [token, setToken] = useContext(store);
  axios
    .get("http://localhost:5000/sample")
    .then((res) => {
      console.log(res);
      res.send("nikitha");
    })
    .catch((err) => console.log(err));
  //const[details,setDetails]={firstname:"",lastname:"",email:"",mobile:"",gender:"",address:"",category:"",experience:"",hourly_wage:""}
  /*useEffect(() => {
    axios
      .get("http://localhost:5000/sample")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  //const [token, setToken] = useContext(store);
  //if (!token) {
  //console.log("no token");
  //}
  /*<p>FirstName:{details.firstname}</p>
  <p>LastName:{details.lastname}</p>
  <p>Email:{details.email}</p>
  <p>Mobile No:{details.mobile}</p>
  <p>Gender:{details.gender}</p>
  <p>Cateogry:{details.category}</p>
  <p>Address:{details.address}</p>
  <p>Experience:{details.experience}</p>
  <p>Hourly Wage:{details.hourly_wage}</p>*/
  if (!token) {
    return <Navigate to="/home"></Navigate>;
  }
  return (
    <div>
      <div>Redirected successfull by dathathreyas help</div>
      <p>FirstName:</p>
      <p>LastName:</p>
      <p>Email:</p>
      <p>Mobile No:</p>
      <p>Gender:</p>
      <p>Cateogry:</p>
      <p>Address:</p>
      <p>Experience:</p>
      <p>Hourly Wage:</p>
    </div>
  );
};
