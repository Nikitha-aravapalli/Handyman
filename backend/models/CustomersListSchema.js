const mongoose = require("mongoose");

const customerDetailsSchema = new mongoose.Schema({
  provider_email: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  startdate: String,
  enddate: String,
  starttime: String,
  endtime: String,
  hour: String,
  cost: String,
});

const customer_model = new mongoose.model(
  "customerDetailsList",
  customerDetailsSchema
);
module.exports = customer_model;
