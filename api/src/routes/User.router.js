const express = require("express");

const withUser = require("../middleware/withUser");
const auth = require("../helpers/auth");
const { User, Team } = require("../models");

const router = express.Router();

// GET /api/users
router.get("/", withUser, async function(req, res) {
  const myUser = req.myUser;
  const whereClauses = { organizationId: myUser.organizationId };
  const includes = [];

  // if the logged user is the owner of the organization
  // they can view all the users, otherwise they can only
  // view the users who belong to teams they manage.
  if (!myUser.isAdmin) {
    whereClauses["$Team.managerId$"] = myUser.id;

    includes.push({
      model: Team,
      as: "Team",
      required: true,
      attributes: [],
    });
  }

  const users = await User.findAll({
    where: whereClauses,
    include: includes,
    attributes: {
      exclude: [ "organizationId", "isAdmin", "isManager" ],
    },
  });

  res.json(users);
});

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
