const express = require("express");

const auth = require("../helpers/auth");
const { User } = require("../models");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.json({ id: req.user.id });
});

// POST /api/users/add
router.post("/add", async function(req, res) {
  /* eslint-disable camelcase */
  const {
    first_name: firstName,
    last_name: lastName,
    browser_agent: browserAgent
  } = req.query;
  /* eslint-disable camelcase */

  const newUser = await User.create({
    firstName,
    lastName,
    browserAgent,
    raw: true
  });

  auth.loginAs(newUser.id, req, res);
  res.json(newUser);
});

// Debug routes below
if (process.env.NODE_ENV !== "production") {
  // GET /api/users/login/:user_id
  router.get("/login/:user_id", async function(req, res) {
    const userId = req.params.user_id;

    // Check if user with id exists
    await User.findByPk(userId);

    const token = auth.loginAs(userId, req, res);
    res.json({ token });
  });
}

module.exports = router;
