import React, { createContext } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomerList_provider } from "./CustomerList_providers";
import { Home } from "./Home";
import {
  CUSTOMER_LOGIN_ENDPOINT,
  PROVIDER_LOGIN_ENDPOINT,
  CUSTOMER_Register_ENDPOINT,
  PROVIDER_Register_ENDPOINT,
} from "./authConfig";
import "./App.css";
import { useState } from "react";
import { ProviderDetails } from "./ProviderDetails";
import { Services } from "./Services";
import { ResetPassword } from "./ResetPassword";
import { DisplayProviders } from "./DisplayProviders";
import {
  CUSTOMER_FORGET_ENDPOINT,
  PROVIDER_FORGET_ENDPOINT,
} from "./authConfig";
import { Sample } from "./Sample";
import { CustomerDetails } from "./CustomerDetails";
import { Practise } from "./Practise";
import { Home1 } from "./Home1.js";
import { Home2 } from "./Home2.js";
import { Slider } from "./Slider.js";
import { About_providers } from "./About_providers.js";
import { About_customers1 } from "./About_customers1.js";
import { Contact } from "./Contact";

export const store = createContext();

function App() {
  const [userType, setUserType] = useState("");
  const [token, setToken] = useState(null);
  //<Route path="/sample" element={<Sample></Sample>} />
  console.log(userType);
  return (
    <div className="App">
      <header className="App-header">
        <store.Provider value={[token, setToken]}>
          <Router>
            <Routes>
              <Route path="/" element={<Home onSetUser={setUserType}></Home>} />
              <Route
                path="/login"
                element={
                  <Login
                    collection={userType}
                    endpoint={
                      userType === "customer"
                        ? CUSTOMER_LOGIN_ENDPOINT
                        : PROVIDER_LOGIN_ENDPOINT
                    }
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <Register
                    collection={userType}
                    endpoint={
                      userType === "customer"
                        ? CUSTOMER_Register_ENDPOINT
                        : PROVIDER_Register_ENDPOINT
                    }
                  />
                }
              />
              <Route
                path="/forgot"
                element={
                  <ResetPassword
                    collection={userType}
                    endpoint={
                      userType === "customer"
                        ? CUSTOMER_FORGET_ENDPOINT
                        : PROVIDER_FORGET_ENDPOINT
                    }
                  ></ResetPassword>
                }
              />
              <Route
                path="/details"
                element={<ProviderDetails></ProviderDetails>}
              />
              <Route path="/services" element={<Services></Services>} />
              <Route
                path="/DisplayProviders"
                element={<DisplayProviders></DisplayProviders>}
              />
              <Route
                path="/customerDetails"
                element={<CustomerDetails></CustomerDetails>}
              />
              <Route path="/sample" element={<Sample></Sample>} />
              <Route path="/practise" element={<Practise></Practise>} />
              <Route path="/clients" element={<CustomerList_provider />} />
              <Route path="/home1" element={<Home1></Home1>} />
              <Route path="/home2" element={<Home2></Home2>} />
              <Route path="/slider" element={<Slider></Slider>} />
              <Route
                path="/about"
                element={<About_providers></About_providers>}
              />
              <Route
                path="/about1"
                element={<About_customers1></About_customers1>}
              />
              <Route path="/contact" element={<Contact></Contact>} />
            </Routes>
          </Router>
        </store.Provider>
      </header>
    </div>
  );
}

export default App;
