import { useState, useRef, useContext } from "react";
//import {useState,useRef} from "react";
import "./css/ProviderDetails.css";
//import upload_image from "./images/image_upload.png";
import axios from "axios";
import { store } from "./App";
import { Navigate } from "react-router-dom";

export const ProviderDetails = () => {
  const [token, setToken] = useContext(store);
  const path = "../images/image_upload.png";
  const [img, setImg] = useState("");
  const [image, setImage] = useState(path);
  const [profileDetails, setprofileDetails] = useState({
    username: " ",
    firstname: " ",
    lastname: " ",
    email: " ",
    phone: " ",
    category: " ",
    address: " ",
    gender: " ",
    experience: "",
    wage: "",
  });
  const inputRef = useRef(null);
  //const [array,setArray]=useState(["capenter","plumber","electrician"]);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const filename = event.target.files[0];
    setImg(filename);
    console.log("backend  is", img);
    console.log("event is ", filename);
    console.log("image before is", image);

    /*const reader = new FileReader();
    
        reader.onloadend = () => {
            console.log("jaggu",reader);
          setImage(reader.result);
        };
        if (filename) {
            reader.readAsDataURL(filename);
          } else {
            setImage(path); // If no file is selected, revert to the default image
          }*/

    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleProfileDetails = (event) => {
    const { name, value } = event.target;
    setprofileDetails({ ...profileDetails, [name]: value });
  };

  /*useEffect(() => {
    // Update the object with image data whenever 'image' state changes
    setImageData((prevImageData) => ({ ...prevImageData, image }));
  }, [image]);*/
  /*useEffect(() => {
    console.log("Updated img value is", img); // This will log the updated img value
  }, [img]);*/

  const handleSubmit = (event) => {
    console.log("backend  is", img);
    //profileDetails.image=img;
    event.preventDefault();
    console.log("image after is", image);
    console.log("profileDetails are", profileDetails);
    const formData = new FormData();
    formData.append("profile", profileDetails);
    formData.append("image", img);
    //api
    axios
      .post(
        "http://localhost:5000/details",
        { headers: { "x-token": token } },
        profileDetails
      )
      .then((res) => {
        console.log(res);
        console.log("message is", res.data.message);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!token) {
    console.log("no token");
    <Navigate to="/login"></Navigate>;
  } else {
    console.log("token exist");
  }
  return (
    <div className="divcontainer">
      <h2>Profile</h2>
      <form className="detailscontainer">
        <div className="form-item element1" onClick={handleImageClick}>
          <div className="image1">
            {
              //(image)?(<img src={URL.createObjectURL(image)} alt=""/>):(<img src={upload_image} alt=""/>)
              <img src={image} alt="nikitha" />
            }
            <input
              type="file"
              name="testimage"
              id="photo"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            ></input>
          </div>
        </div>
        <div className="form-item element2">
          <label htmlFor="username label-item">User Name:</label>
          <input
            type="username"
            name="username"
            id="username"
            value={profileDetails.username}
            onChange={handleProfileDetails}
          ></input>
          <button className="editButton" type="submit" onClick={handleSubmit}>
            Edit Profile
          </button>
        </div>
        <div className="element3">
          <div className="form-item">
            <label htmlFor="firstname label-item">First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={profileDetails.firstname}
              onChange={handleProfileDetails}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="lastname label-item">Last Name:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={profileDetails.lastname}
              onChange={handleProfileDetails}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="mail label-item">Email:</label>
            <input
              type="text"
              name="email"
              id="mail"
              value={profileDetails.email}
              onChange={handleProfileDetails}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="phone label-item">Phone:</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              value={profileDetails.phone}
              onChange={handleProfileDetails}
            ></input>
          </div>
        </div>
        <div className="element">
          <div className="form-item">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleProfileDetails}
            ></input>
            <label htmlFor="male">male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleProfileDetails}
            ></input>
            <label htmlFor="female">female</label>
            <input
              type="radio"
              name="gender"
              id="others"
              value="others"
              onChange={handleProfileDetails}
            ></input>
            <label htmlFor="others">others</label>
          </div>
          <div className="form-item">
            <label htmlFor="category label-item">Category:</label>
            <select
              id="category"
              name="category"
              value={profileDetails.category}
              onChange={handleProfileDetails}
            >
              <option value=""></option>
              <option value="Carpentry">Carpentry</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="House keeping">House keeping</option>
              <option value="Painting">Painting</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Tailing and flooring">Tailing and flooring</option>
              <option value="Drywall Repair">Drywall Repair</option>
              <option value="Remodeling">Remodeling</option>
              <option value="Roofing">Roofing</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="address label-item">Address</label>
            <input
              type="textArea"
              name="address"
              id="address"
              value={profileDetails.address}
              onChange={handleProfileDetails}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              name="experience"
              id="experience"
              value={profileDetails.experience}
              onChange={handleProfileDetails}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="wage">Hourly wage</label>
            <input
              type="text"
              name="wage"
              id="wage"
              value={profileDetails.wage}
              onChange={handleProfileDetails}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};
