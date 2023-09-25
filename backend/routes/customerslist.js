const express = require("express");
const router = express.Router();
const customerDetails = require("../models/CustomersListSchema");
router.post("/", (req, res) => {
  const user = req.body;
  const name = user.user.name;
  const email = user.user.email;
  const phone = user.user.phone;
  const address = user.user.Address;
  const startdate = user.user.startdate;
  const enddate = user.user.enddate;
  const starttime = user.user.starttime;
  const endtime = user.user.endtime;
  const hour = user.user.hour;
  const cost = user.user.cost;
  const provider_email = user.user.provider_email;
  const customers = new customerDetails({
    name: name,
    email: email,
    phone: phone,
    address: address,
    startdate: startdate,
    enddate: enddate,
    starttime: starttime,
    endtime: endtime,
    hour: hour,
    cost: cost,
    provider_email: provider_email,
  });
  customers
    .save()
    .then(() => {
      console.log("data stored into db successfully");
      res.send({ message: "data sent to the provider successfully" });
    })
    .catch((err) => console.log(err));
});
module.exports = router;
