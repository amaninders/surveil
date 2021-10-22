const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (_, res) => {
  res.send("Index Router");
});

module.exports = router;
