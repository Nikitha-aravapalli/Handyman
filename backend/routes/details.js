const express = require("express");
const router = express.Router();
const db = require("../DBConnection");
const profile = require("../models/profileSchema");
const middleware = require("../middelware");
//const { ProviderDetails } = require("../../frontend/src/ProviderDetails");

//connecting database
db();

router.post("/", middleware, async (req, res) => {
  try {
    let exist = await providers.findById(req.user.id);
    if (!exist) {
      return res.status(400).send("user doesn't loggedin");
    } else {
      const username = req.body.username;
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const phone = req.body.phone;
      const gender = req.body.gender;
      const category = req.body.category;
      const address = req.body.address;
      const experience = req.body.experience;
      const wage = req.body.wage;
      const profileModel = req.body.category;
      console.log(req.body);

      profile
        .findOne({ email: email }, { category: category })
        .then((user) => {
          if (user) {
            console.log(
              "email  for that category already exists Please use another email for different register"
            );
            res.send({
              message:
                "email  for that category already exists Please use another email for different register",
            });
          } else {
            newProvider = new profile({
              username: username,
              firstname: firstname,
              lastname: lastname,
              email: email,
              phone: phone,
              gender: gender,
              category: category,
              address: address,
              experience: experience,
              wage: wage,
            });
            newProvider
              .save()
              .then((res) => {
                console.log("stored in the db successfully");
              })
              .catch((err) => {
                console.error(
                  "error occured while storing in the database",
                  err
                );
              });
          }
        })
        .catch((err) => {
          console.log("error occured while finding", err);
        });
    }
  } catch (err) {}
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const category = req.body.category;
  const address = req.body.address;
  const experience = req.body.experience;
  const wage = req.body.wage;
  const profileModel = req.body.category;
  console.log(req.body);

  profile
    .findOne({ email: email }, { category: category })
    .then((user) => {
      if (user) {
        console.log(
          "email  for that category already exists Please use another email for different register"
        );
        res.send({
          message:
            "email  for that category already exists Please use another email for different register",
        });
      } else {
        newProvider = new profile({
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          gender: gender,
          category: category,
          address: address,
          experience: experience,
          wage: wage,
        });
        newProvider
          .save()
          .then((res) => {
            console.log("stored in the db successfully");
          })
          .catch((err) => {
            console.error("error occured while storing in the database", err);
          });
      }
    })
    .catch((err) => {
      console.log("error occured while finding", err);
    });
});
module.exports = router;
