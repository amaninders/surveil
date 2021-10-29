const express = require("express");

const withUser = require("../middleware/withUser");
const { prepareActivityProfileItemForOutput } = require("../helpers/prepareForOutput");
const {
  ActivityProfile,
  ActivityProfileItem,
} = require("../models");
const { PermissionError } = require("../errors");

const router = express.Router();

// GET /api/activity_profile
router.get("/", async function(_, res) {
  const activities = await ActivityProfile.findAll({ raw: true });

  res.json(activities);
});

// POST /api/activity_profile
router.post("/", withUser, async function(req, res) {
  if (!req.myUser.isAdmin && !req.myUser.isManager) {
    throw new PermissionError();
  }

  const {
    name,
    title,
    expected_time: expectedTime,
  } = req.body;

  const newActivity = await ActivityProfile.create({
    name,
    title,
    expectedTime,
  });

  res.json(newActivity);
});

// GET /api/activity_profile/:profile_id
router.get("/:profile_id", withUser, async function(req, res) {
  const myUser = req.myUser;
  const activityProfileId = req.params.profile_id;

  const activityProfile = await ActivityProfile.findByPk(
    activityProfileId,
    { raw: true },
  );

  if (!myUser.isAdmin && !(activityProfile && myUser.activityProfileId === activityProfile.id)) {
    throw new PermissionError();
  }

  const activityItems = await ActivityProfileItem.findAll({
    where: { activityProfile: activityProfileId }
  }, { raw: true });

  res.json({
    ...activityProfile,
    items: activityItems.map(prepareActivityProfileItemForOutput),
  });
});

// POST /api/activity_profile/:profile_id
router.post("/:profile_id", withUser, async function(req, res) {
  const myUser = req.myUser;
  const activityProfileId = req.params.profile_id;

  const activityProfile = await ActivityProfile.findByPk(
    activityProfileId,
    { raw: true },
  );

  if (!(activityProfile && myUser.activityProfileId === activityProfile.id)) {
    throw new PermissionError();
  }

  const {
    name,
    expected_time: expectedTime
  } = req.body;
  const newActivityProfileItem = await ActivityProfileItem.create({
    name,
    expectedTime,
    activityProfile: activityProfileId,
    raw: true,
  });

  res.json(prepareActivityProfileItemForOutput(newActivityProfileItem));
});

module.exports = router;
