const express = require("express");

const withUser = require("../middleware/withUser");
const { ActivityProfile } = require("../models");
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
router.get("/:profile_id", async function(req, res) {
  const activityProfileId = req.params.profile_id;
  const activities = await ActivityProfile.findByPk(
    activityProfileId,
    { raw: true },
  );

  res.json(activities);
});

// POST /api/activity_profile/:profile_id
router.post("/", withUser, async function(req, res) {
  if (!req.myUser.isAdmin && !req.myUser.isManager) {
    throw new PermissionError();
  }

  const { name, title, expectedTime } = req.body;
  const newActivity = await ActivityProfile.create({
    name,
    title,
    expectedTime,
    raw: true,
  });

  res.json(newActivity);
});

module.exports = router;
