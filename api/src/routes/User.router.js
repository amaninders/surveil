const express = require("express");

const { NotFoundError, PermissionError } = require("../errors");
const withUser = require("../middleware/withUser");
const auth = require("../helpers/auth");
const {
  getOptionsForUsersManagedBy,
  isManagerOf,
} = require("../helpers/user");
const { prepareUserForOutput } = require("../helpers/prepareForOutput");
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
    raw: true,
  });

  res.json(users.map(prepareUserForOutput));
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
    browser_agent: browserAgent,
    is_manager: isManager,
    is_admin: isAdmin,
    team_id: teamId,
  } = req.body;
  const otherProperties = {};

  if (isManager === "true" || isAdmin === "true") {
    const userId = req.user ? req.user.id : null;
    const myUser = await User.findByPk(userId);

    if (!(myUser && myUser.isAdmin)) {
      throw new PermissionError();
    }
    
    otherProperties.isManager = isManager === "true";
    otherProperties.isAdmin = isAdmin === "true";
  }

  const newUser = await User.create({
    ...otherProperties,
    firstName,
    lastName,
    browserAgent,
    teamId,
    raw: true
  });

  auth.loginAs(newUser.id, req, res);
  res.json(prepareUserForOutput(newUser));
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
