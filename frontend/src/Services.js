import "./css/Services.css";
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
export const Services=()=>{
    const[service,setService]=useState("")
    const navigate = useNavigate();
    const handleService=(event)=>{
        console.log("service clicked is",event.target.value);
        setService(event.target.value)
    }
    
    useEffect(() => {
        console.log(service);
        
        if(service) {
          axios.post("http://localhost:5000/services", { service:service })
            .then((res) => {
              console.log("result sent successfully to the backend");
              console.log("niki",res.data.message)
              console.log("array is",res.data)
              const array=res.data;

              navigate("/DisplayProviders",{state:{array:array}});
            })
            .catch((err) => {
              console.error("error occurred:", err);
            });
        }
      }, [service]);
    return(
    <div>
    <h2 className="Servicesheading">Services</h2>
    <div className="cards">
        <div className="card card1">
            <div className="cardContainer">
                <div className="image"><img src="../services/carpentry.jfif"></img></div>
            <div className="detials">                  
                <h3>
                    Carpentry
                </h3>
                <p>carpentry, the art and trade of cutting, working, and joining timber. The term includes both structural timberwork in framing and items such as doors, windows, and staircases.</p>
                <button className="servicesButton" value="Carpentry" onClick={handleService}>Use services</button>
            </div>
            </div>
        </div>
        <div className="card card2">
        <div className="cardContainer">
            <div className="image"><img src="../services/plumbing.jpeg"></img></div>
            <div className="detials">
                <h3>
                    Plumber
                </h3>
                <p>A plumber is responsible for the system of pipes within a building. This system transports water to faucets and appliances and also removes wastess</p>
                <button className="servicesButton" value="Plumber" onClick={handleService}>Use Servies</button>
            </div>
            </div>
        </div>
        <div className="card card3">
        <div className="cardContainer">
        <div className="image">
            <img src="../services/electrician.jpg"></img></div>
            <div className="detials">
                <h3>
                Electrician
                </h3>
                <p>An Electrician is a skilled professional who installs, maintains, and repairs electrical systems in buildings and structures.</p>
                <button className="servicesButton" value="Electrician" onClick={handleService}>Use Servies</button>
            </div>
            </div>
        </div>
        <div className="card card4">
        <div className="cardContainer">
        <div className="image"><img src="../services/housekeeping.jpg"></img></div>
            <div className="detials">
                <h3>
                House keeping
                </h3>       
        <p>Housekeeping is the management and routine support activities such as tidying, cleaning, cooking, routine maintenance, shopping, and bill payment.</p>
        <button className="servicesButton"  value="House keeping" onClick={handleService}>Use Servies</button>
            </div>
            </div>
        </div>
        <div className="card card5">
        <div className="cardContainer">
            <div className="image">
            <img src="../services/painting.jfif"></img></div>
            <div className="detials">
                <h3>
                Painting
                </h3>
                <p> Painting can be described as the process of applying color to a wall or object for the purpose of art or aesthetics.</p>
                <button className="servicesButton" value="Painting" onClick={handleService}>Use Servies</button>
            </div>
            </div>
        </div>
        <div className="card card6">
        <div className="cardContainer">
        <div className="image">
            <img src="../services/mechanical.jfif"></img></div>
            <div className="detials">
                <h3>
                Mechanical
                </h3>
                <p>A mechanic is responsible for inspecting and repairing vehicles, machinery, and light trucks.</p>
                <button className="servicesButton" value="Mechanical" onClick={handleService}>Use Servies</button>
            </div>
        </div>
        </div>
        <div className="card card7">
        <div className="cardContainer">
        <div className="image">
            <img src="../services/tailing.jpg"></img></div>
            <div className="detials">
                <h3>
                Tailing and flooring
                </h3>
                <p>Flooring is the general term for a permanent covering of a floor, or for the work of installing such a floor covering. </p>
                <button className="servicesButton" value="Tailing and flooring" onClick={handleService}>Use Servies</button>
            </div>
            </div>
        </div>
        <div className="card card8">
        <div className="cardContainer">
        <div className="image">
            <img src="../services/drywallrepair.jfif"></img></div>
            <div className="detials">
                <h3>
                Drywall Repair
                </h3>
                <p>The Contractor is responsible for removing, restoring, and reinstalling wall hangings, including but not limited to paintings, pictures, and plaques.</p>
                <button className="servicesButton" value="Drywall Repair" onClick={handleService}>Use Servies</button>
            </div>
            </div>
        </div>
        <div className="card card9">
        <div className="cardContainer">
        <div className="image">
            <img src="../services/remodeling.webp"></img></div>
            <div className="detials">
                <h3>
                Remodeling
                </h3>
                <p>The concept of home improvement, home renovation, or remodeling is the process of renovating or making additions to one's home.</p>
                <button className="servicesButton" value="Remodeling" onClick={handleService}>Use Servies</button>
            </div>
        </div>
        </div>
        <div className="card card10">
        <div className="cardContainer">
        <div className="image">
            <img src="../services/roofing.jfif"></img></div>
            <div className="detials">
                <h3>
                Roofing
                </h3>
                <p>Roofers specialize in the placement, removal and repair of various roofing materials such as asphalt, wood and plastics</p>
                <button className="servicesButton" value="Roofing" onClick={handleService}>Use Servies</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}