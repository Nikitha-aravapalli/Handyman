const express = require("express");
const router = express.Router();
const customers_model = require("../models/CustomersListSchema");
router.get("/", (req, res) => {
  res.send({ message: "get request is accessed" });
});
router.post("/", (req, res) => {
  const email = req.body.email;
  const clients_array = [];
  const email1 = " nikithaaravapalli123@gmail.com";
  customers_model.find({ provider_email: email1 }).then((users) => {
    /*if (user) {
      console.log("This user has clients");
      //clients_array.push(user);
      console.log(clients_array);
      res.send((array:array = clients_array));
    } else {
      console.log("Sorry,No clients");
    }*/
    res.send(users);
  });
  console.log(email);
});
module.exports = router;
