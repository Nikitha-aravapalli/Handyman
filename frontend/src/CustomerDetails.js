import React, { useState, useEffect } from "react";
import "./css/CustomerDetails.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export const CustomerDetails = () => {
  const location = useLocation();
  const wage = location.state;
  console.log("wage is", wage);
  //console.log(typeof(wage.wage))
  //console.log("manasa is",wage.wage);
  const provider_email = wage.email;
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    Address: "",
    startdate: "",
    enddate: "",
    starttime: "",
    endtime: "",
  });
  const [hours, setHours] = useState(0);
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");
  const [hour, sethour] = useState(0);
  const [totaltime, settotaltime] = useState(0);
  var minutes = "";
  var time3, time4, days_diff;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("provider_email:", provider_email);
    const user = {
      ...customer,
      hour: hours,
      cost: price,
      provider_email: provider_email,
    };
    axios
      .post("http://localhost:5000/customerslist", { user })
      .then((req, res) => {
        alert(req.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    console.log(Cookies.get("Email"));
    //setCustomer({ ...customer, email: Cookies.get("Email") });
    customer.email = Cookies.get("Email");
    console.log("customer email using cookies", customer.email);
    console.log();
    /*console.log("provider_email:", provider_email);
    const user = {
      ...customer,
      hour: hours,
      cost: price,
      provider_email: provider_email,
    };
    axios
      .post("http://localhost:5000/customerslist", { user })
      .then((req, res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });*/
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
    let days_diff;
    if (customer.startdate && customer.enddate != "") {
      var date1 = new Date(customer.startdate);
      var date2 = new Date(customer.enddate);
      var days_diff_milli = date2.getTime() - date1.getTime();
      days_diff = days_diff_milli / (1000 * 24 * 60 * 60);
      console.log(days_diff);
    }
    if (customer.starttime && customer.endtime != "") {
      var time1 = customer.starttime.split(":");
      var time2 = customer.endtime.split(":");
      time1 = time1.map(Number);
      time2 = time2.map(Number);
      if (time2[0] < time1[0]) {
        time2[0] = time2[0] + 24;
      }
      if (time2[1] < time1[1]) {
        time2[1] = time1[1] + 60;
      }
      time3 = time2[0] - time1[0];
      time4 = time2[1] - time1[1];
      console.log("hours", time3);
      console.log("minutes", time4);
      //settotaltime(time3*days_diff)
      var totaltime1 = 0;
      totaltime1 = time3 * days_diff;
      console.log("my fate", totaltime1);
      sethour(totaltime1);
      //settotaltime(totaltime1)
      console.log("my karma", hour);
      minutes = time4 * days_diff;
      while (minutes > 60) {
        sethour(hour + 1);
        minutes = minutes - 60;
      }
      console.log("total hours", hour);
      console.log("total minutes", minutes);

      if (hours != "" && ((minutes != 0 && hours > hour + 1) || hours > hour)) {
        console.log(hours);
        setMessage(
          "Expected hours can't be greater than provided time.Please update date or time"
        );
      }

      console.log("hours if ", hours);
      console.log("hour if", hour);
      if (hour == 0 || hours > hour) {
        console.log("if");
        sethour(hour);
      }
    }
  };

  const handleAddWork = (event) => {
    event.preventDefault();
    setHours(hours + 1);
    setPrice(price + Number(wage.wage));
  };

  const handleSubWork = (event) => {
    event.preventDefault();
    if (hours === 0) {
      setHours(0);
      setPrice(0);
    } else {
      setHours(hours - 1);
      setPrice(price - Number(wage.wage));
    }
  };

  return (
    <div className="details-container">
      <h1 className="customerheading">Customer Details</h1>
      <form className="customer-container">
        <label htmlFor="Name">Name*</label>
        <input
          type="text"
          name="name"
          id="Name"
          value={customer.name}
          onChange={handleSubmit1}
          required
        ></input>
        <label htmlFor="email">Email*</label>
        <input
          type="text"
          name="email"
          id="email"
          value={customer.email}
          readOnly
          required
        ></input>
        <label htmlFor="phone">Phone*</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          value={customer.phone}
          onChange={handleSubmit1}
        ></input>
        <label htmlFor="Address">Address*</label>
        <input
          type="textfield"
          id="Address"
          name="Address"
          value={customer.Address}
          onChange={handleSubmit1}
          required
        ></input>
        <label htmlFor="startdate">Start Date*</label>
        <input
          type="date"
          name="startdate"
          id="startdate"
          value={customer.startdate}
          onChange={handleSubmit1}
        ></input>
        <label htmlFor="enddate">End Date*</label>
        <input
          type="date"
          name="enddate"
          id="enddate"
          value={customer.enddate}
          onChange={handleSubmit1}
          required
        ></input>
        <label htmlFor="starttime">From*</label>
        <input
          type="time"
          id="starttime"
          name="starttime"
          value={customer.starttime}
          onChange={handleSubmit1}
          required
        ></input>
        <label htmlFor="endtime">To*</label>
        <input
          type="time"
          id="endtime"
          name="endtime"
          value={customer.endtime}
          onChange={handleSubmit1}
          required
        ></input>
        <label htmlFor="hours">Expected hours of Work*</label>
        <div>
          <button className="work" onClick={handleSubWork}>
            -
          </button>
          <input
            type="input"
            name="hours"
            id="hours"
            value={hours}
            readOnly
            required
          ></input>
          <button className="work" onClick={handleAddWork}>
            +
          </button>
        </div>
        <small value={message}>{message}</small>
        <label htmlFor="cost">Approximate Price*</label>
        <input type="text" id="cost" value={price} readOnly></input>
        <button
          type="submit"
          className="customer-button"
          onClick={handleSubmit}
        >
          Confirm Request
        </button>
      </form>
    </div>
  );
};
