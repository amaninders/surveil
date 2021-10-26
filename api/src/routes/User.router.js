const express = require("express");

const auth = require("../helpers/auth");
const { User } = require("../models");

const router = express.Router();

// POST /api/users
router.post("/", async function(req, res) {
  /* eslint-disable camelcase */
  const {
    first_name: firstName,
    last_name: lastName,
    browser_agent: browserAgent
  } = req.body;
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
    const userId = Number(req.params.user_id);

    // Check if user with id exists
    await User.findByPk(userId);

    const token = auth.loginAs(userId, req, res);
    res.json({ token });
  });
}

module.exports = router;
