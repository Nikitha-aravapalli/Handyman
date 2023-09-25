const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
//app.use(cors());
app.use("*", cors({ origin: true, credentials: true }));
app.options("*", cors({ origin: "http://localhost:3000", credentials: true }));

//importing all the api's
const registerRoute = require("./routes/register.js");
const loginRoute = require("./routes/login.js");
const profileRoute = require("./routes/details.js");
const forgotPassword = require("./routes/forgot.js");
const services = require("./routes/services.js");
const middleware = require("./middelware.js");
const sample = require("./routes/Sample.js");
const practise_page = require("./routes/practise.js");
const customerlist = require("./routes/customerslist.js");
const customerlist_provider = require("./routes/customerlist_provider.js");

//using the api's
app.use(registerRoute);
app.use(loginRoute);
app.use("/practise", practise_page);
//app.use("/details", middleware, profileRoute);
app.use(forgotPassword);
app.use("/services", services);
app.use("/sample", sample);
app.use("/customerslist", customerlist);
app.use("/clients", customerlist_provider);
app.get("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});

/*app.post("/practise", (req, res) => {
  console.log(req.body.name);
  res.send("received");
});
*/
//establishing connection for the server on port 5000
app.listen(5000, () => {
  console.log("server running on port 5000");
});
