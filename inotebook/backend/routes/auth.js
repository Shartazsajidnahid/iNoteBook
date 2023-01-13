const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.body);
  res.send("from auth.js");
});

module.exports = router;
