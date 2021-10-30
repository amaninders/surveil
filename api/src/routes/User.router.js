const express = require("express");

const { NotFoundError, PermissionError } = require("../errors");
const withUser = require("../middleware/withUser");
const auth = require("../helpers/auth");
const {
  getOptionsForUsersManagedBy,
  isManagerOf,
} = require("../helpers/user");
const {
  prepareUserForOutput,
  prepareActivityStreamForOutput,
} = require("../helpers/prepareForOutput");
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

  res.json(activities.map(prepareActivityStreamForOutput));
});

// POST /api/users
router.post("/", withUser, async function(req, res) {
  const {
    first_name: firstName,
    last_name: lastName,
    browser_agent: browserAgent,
    is_manager: isManager,
    is_admin: isAdmin,
    team_id: teamId,
  } = req.body;
  const myUser = req.myUser;
  const organizationId = myUser.organizationId;
  const otherProperties = {};

  if (isManager || isAdmin) {
    if (!(myUser && myUser.isAdmin)) {
      throw new PermissionError();
    }
    
    otherProperties.isManager = isManager;
    otherProperties.isAdmin = isAdmin;
  }

  const newUser = await User.create({
    ...otherProperties,
    organizationId,
    firstName,
    lastName,
    browserAgent,
    teamId,
  }, { raw: true });

  res.json(prepareUserForOutput(newUser.toJSON()));
});

// PUT /api/users/:user_id
router.put("/:user_id", withUser, async function(req, res) {
  const myUser = req.myUser;
  const userId = req.params.user_id === "me" ? myUser.id : Number(req.params.user_id);

  if (!(await isManagerOf(myUser, userId))) {
    throw PermissionError();
  }

  const {
    first_name: firstName,
    last_name: lastName,
    browser_agent: browserAgent,
  } = req.body;

  const updates = {};

  if (firstName) {
    updates.firstName = firstName;
  }

  if (lastName) {
    updates.lastName = lastName;
  }

  if (browserAgent) {
    updates.browserAgent = browserAgent;
  }

  if (myUser.isAdmin) {
    const {
      activity_profile_id: activityProfileId,
      team_id: teamId,
      is_manager: isManager,
    } = req.body;

    if (activityProfileId) {
      updates.activityProfileId = activityProfileId;
    }

    if (teamId) {
      updates.teamId = teamId;
    }

    if (isManager) {
      updates.isManager = isManager;
    }
  }

  const result = await User.update(
    updates,
    {
      where: { id: userId },
      returning: true,
    },
  );
  const updatedUser = result["1"][0];

  res.json(prepareUserForOutput(updatedUser));
});

router.delete("/:user_id", withUser, async function(req, res) {
  const myUser = req.myUser;
  const userId = req.params.user_id === "me" ? myUser.id : Number(req.params.user_id);

  if (!myUser.isAdmin && userId !== myUser.id) {
    throw PermissionError();
  }

  await User.destroy({ where: { id: userId } });

  // Logout if signed in account deleted
  if (req.params.user_id === "me" || myUser.id == req.params.user_id) {
    auth.logout(res);
  }

  res.json({ message: "User successfully deleted!" });
});

router.get("/logout", function(_, res) {
  auth.logout(res);
  res.json({ message: "Successfully logged out!" });
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
