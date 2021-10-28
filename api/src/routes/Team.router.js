const express = require("express");
const { NotFoundError } = require("../errors");
const {
  prepareUserForOutput,
  prepareTeamForOutput,
} = require("../helpers/prepareForOutput");
const { User, Team } = require("../models");

const router = express.Router();

// GET /api/teams
router.get("/", async function(req, res) {
  const userId = req.user.id;
  const teams = await Team.findAll({
    where: { managerId: userId },
  });

  res.json(teams.map(prepareTeamForOutput));
});

// GET /api/teams/:team_id
router.get("/:team_id", async function(req, res) {
  const userId = req.user.id;
  const teamId = req.params.team_id;

  // Query for the desired team but make sure they have permissions to access it
  let team = await Team.findOne({
    where: {
      id: teamId,
      // A manager should only be able to see their own teams
      managerId: userId,
    },
    raw: true,
  });
  if (!team) {
    throw new NotFoundError(`Could not find team with id ${teamId}!`);
  }

  // Query all members on the team
  const members = await User.findAll({
    where: { teamId },
    raw: true,
    attributes: { exclude: [ "teamId", "isAdmin", "isManager" ] },
  });

  team = prepareTeamForOutput(team);

  res.json({
    ...team,
    members: members.map(prepareUserForOutput)
  });
});

// POST /api/teams
router.post("/", async function(req, res) {
  /* eslint-disable camelcase */
  const {
    manager_id: managerId,
    name,
  } = req.body;
  /* eslint-disable camelcase */

  const newTeam = await Team.create({
    managerId,
    name,
    raw: true
  });

  res.json(prepareTeamForOutput(newTeam));
});


module.exports = router;
