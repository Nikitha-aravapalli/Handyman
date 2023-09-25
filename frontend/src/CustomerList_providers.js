import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import "./css/CustomerList_providers.css";
export const CustomerList_provider = () => {
  const email = Cookies.get("Email");
  console.log("email using cookies", email);
  var value = false;
  //const array = [];
  const [client, setClient] = useState([]);
  useEffect(() => {
    console.log("Client state updated:", client);
  }, [client]);
  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/clients", { email: email })
      .then((req, res) => {
        console.log("req", req.data);
        const array = req.data;
        setClient(array);
        console.log("array", array);
      });
  };
  const client_array = client.map((client) => (
    <li className="client_container" key={client._id}>
      <p>
        <span>Name:</span>
        {client.name}
      </p>
      <p>
        <span>Email:</span>
        {client.email}
      </p>
      <p>
        <span>Phone:</span>
        {client.phone}
      </p>
      <p>
        <span>Start_Date:</span>
        {client.startdate}
      </p>
      <p>
        <span>End_Date:</span>
        {client.enddate}
      </p>
      <p>
        <span>Start_time:</span>
        {client.starttime}
      </p>
      <p>
        <span>End_time:</span>
        {client.endtime}
      </p>
      <p>
        <span>No_Of_hours:</span>
        {client.hour}
      </p>
      <p>
        <span>Cost:</span>
        {client.cost}
      </p>
    </li>
  ));
  return (
    <div className="list">
      <button onClick={handleSubmit}>See Clients</button>
      {client.length > 0 && (
        <div>
          <h1>Clients List</h1>
          {client_array}
        </div>
      )}
    </div>
  );
};
