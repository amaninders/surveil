const express = require("express");

const { NotFoundError, PermissionError } = require("../errors");
const withUser = require("../middleware/withUser");
const auth = require("../helpers/auth");
const { getOptionsForUsersManagedBy, isManagerOf } = require("../helpers/user");
const { User, ActivityStream } = require("../models");

const router = express.Router();

// GET /api/users
router.get("/", withUser, async function(req, res) {
  const { whereClauses, includes } = getOptionsForUsersManagedBy(req.myUser);

  const users = await User.findAll({
    where: whereClauses,
    include: includes,
    attributes: {
      exclude: [ "organizationId", "isAdmin", "isManager" ],
    },
  });

  res.json(users);
});

// GET /api/users/:user_id/activity
router.get("/:user_id/activity", withUser, async function(req, res) {
  const myUser = req.myUser;
  const otherUser = await User.findByPk(req.params.user_id);

  if (!otherUser || !(await isManagerOf(myUser, otherUser))) {
    throw new PermissionError("You do not have permission to view this users activity!");
  }

  const activities = await ActivityStream.findAll({
    where: { userId: otherUser.id },
    raw: true,
  });

  res.json(activities);
});

// POST /api/users
router.post("/", async function(req, res) {
  const {
    first_name: firstName,
    last_name: lastName,
    browser_agent: browserAgent
  } = req.body;

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
    if (!await User.findByPk(userId)) {
      throw NotFoundError(`User with id ${userId} does not exist!`);
    }

    const token = auth.loginAs(userId, req, res);
    res.json({ token });
  });
}

module.exports = router;
