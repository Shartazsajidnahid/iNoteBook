const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("from auth.js");
});

module.exports = router;
