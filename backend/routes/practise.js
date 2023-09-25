const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send(
    "nikitha------------------------------------------------------------------------------------------"
  );
  console.log("get request is called");
  //res.json({ message: "nikitha" });
});
router.post("/", (req, res) => {
  console.log(req);
  console.log(req.body.name);
  res.send("practise hard");
});
module.exports = router;
