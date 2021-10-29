const { Team } = require("../models");

const getOptionsForUsersManagedBy = user => {
  const whereClauses = { organizationId: user.organizationId };
  const includes = [];

  // if the logged user is the owner of the organization
  // they can view all the users, otherwise they can only
  // view the users who belong to teams they manage.
  if (!user.isAdmin) {
    whereClauses["$Team.managerId$"] = user.id;

    includes.push({
      model: Team,
      as: "Team",
      required: true,
      attributes: [],
    });
  }

  return { whereClauses, includes };
};

const isManagerOf = async function(manager, other) {
  if (manager.isAdmin || manager.id === other.id) {
    return true;
  }

  const otherTeam = await Team.findByPk(other.teamId);
  return otherTeam && otherTeam.managerId === manager.id;
};

module.exports = {
  getOptionsForUsersManagedBy,
  isManagerOf,
};