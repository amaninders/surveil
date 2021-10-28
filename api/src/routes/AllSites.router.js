const express = require("express");
const Sequelize = require("sequelize");

const { ActivityStream } = require("../models");


const router = express.Router();

router.get("/", async function(_, res) {
  const activities = await ActivityStream.findAll({
    attributes: [
      "name",
      [Sequelize.literal('SUM(EXTRACT(EPOCH FROM ("endTime" - "startTime")))'), "value"]
    ],
    group: ['name'],
    order: Sequelize.literal('"value" DESC'),
    raw: true
  });

  res.json(activities);
});

module.exports = router;