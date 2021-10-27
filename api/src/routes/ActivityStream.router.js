const express = require("express");
const Sequelize = require("sequelize");

const { prepareActivityStreamForOutput } = require("../helpers/prepareForOutput");
const withUser = require("../middleware/withUser");
const { ActivityStream } = require("../models");

const router = express.Router();

// GET /api/activity
router.get("/", withUser, async function(req, res) {
  const myUser = req.myUser;

  const activities = await ActivityStream.findAll({
    where: { userId: myUser.id },
    raw: true,
  });

  res.json(activities.map(prepareActivityStreamForOutput));
});

// POST /api/activity
router.post("/", async function(req, res) {
  const userId = req.user.id;
  const {
    name,
    title,
  } = req.body;

  const newActivity = await ActivityStream.create({
    userId,
    name,
    title,
  });

  res.json(prepareActivityStreamForOutput(newActivity));
});

// PUT /api/activity/:activity_id/end_time
router.put("/:activity_id/end_time", async function(req, res) {
  const activityId = req.params.activity_id;
  const userId = req.user.id;
  const result = await ActivityStream.update(
    { endTime: Sequelize.NOW },
    {
      where: {
        id: activityId,
        userId,
        // only update end time if its not already set
        endTime: null,
      },
      returning: true,
    },
  );
  const activityStream = result[1]["0"] || {};

  res.json(prepareActivityStreamForOutput(activityStream));
});

module.exports = router;
