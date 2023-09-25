const express = require("express");
const profile = require("../models/profileSchema");
const register = require("../models/registerSchema");
const router = express.Router();
const middleware = require("../middelware");

router.get("/", middleware, async (req, res) => {
  //res.send("sample page");
  register.findOne({ _id: req.user.id }).then((user) => {
    if (user) {
      profile.findOne({ email: user.email }).then((user1) => {
        if (user1) {
          res.send(user1);
        }
      });
    } else {
      res.send("user does not sign in ");
    }
  });
});

module.exports = router;
