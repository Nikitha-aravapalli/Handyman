//import {useState} from "react";
import "./css/DisplayProviders.css";
import { useLocation, useNavigate } from "react-router-dom";

export const DisplayProviders = () => {
  //const [providers,setProviders]=useState([])
  const location = useLocation();
  const navigate = useNavigate();
  const array1 = location.state;
  let providers;
  const handleSubmit = (item) => {
    console.log("item wage", item.wage);
    navigate("/customerDetails", {
      state: { wage: item.wage, email: item.email },
    });
  };

  if (array1 == null) {
    providers = "No Worker available";
  } else {
    providers = array1.array.map((item) => (
      <li key={item._id} className="list-item">
        <p>
          <span className="list-span">username:</span>
          {item.username}
        </p>
        <p>
          <span className="list-span">FirstName:</span>
          {item.firstname}
        </p>
        <p>
          <span className="list-span">Lastname:</span>
          {item.lastname}
        </p>
        <p>
          <span className="list-span">Email:</span>
          {item.email}
        </p>
        <p>
          <span className="list-span">Gender:</span>
          {item.gender}
        </p>
        <p>
          <span className="list-span">Experience:</span>
          {item.experience}
        </p>
        <p>
          <span className="list-span">Address:</span>
          {item.address}
        </p>
        <p>
          <span className="list-span">Phone:</span>
          {item.phone}
        </p>
        <p>
          <span className="list-span">Hourly wages:</span>
          {item.wage}
        </p>
        <p>
          <button
            className="request"
            type="submit"
            onClick={() => handleSubmit(item)}
          >
            Request
          </button>
        </p>
      </li>
    ));
  }
  console.log("array is 1", array1);
  return (
    <div>
      <h2 className="Providers">Available Service Providers</h2>
      <ul>{providers}</ul>
    </div>
  );
};
