const {
  ActivityProfileItem,
  User,
} = require("../models");


const getActivityProfileItems = async function(activityProfileId) {
  const activityProfileItems = await ActivityProfileItem.findAll({
    where: { activityProfileId },
    raw: true,
  });

  return activityProfileItems;
};

const addIsCompliantFields = async function(activities) {
  // Multiple users can be assigned the same activity profile
  // avoid making duplicate database requests
  const userIds = [...new Set(activities.map(activity => activity.userId))];
  const users = await Promise.all(userIds.map(userId => User.findByPk(userId)));
  const activityProfileIds = [...new Set(users.map(user => user.activityProfileId))];

  const userIdToActivityProfileId = {};
  for (const user of users) {
    userIdToActivityProfileId[user.id] = user.activityProfileId;
  }

  const activityProfileIdToAllowedSites = {};
  for (const activityProfileId of activityProfileIds) {
    if (!activityProfileId) {
      continue;
    }

    const activityProfileItems = await getActivityProfileItems(activityProfileId);
    activityProfileIdToAllowedSites[activityProfileId] = activityProfileItems.map(item => item.name);
  }

  for (const activity of activities) {
    const activityProfileId = userIdToActivityProfileId[activity.userId];
    const allowedSites = activityProfileIdToAllowedSites[activityProfileId] || [];
    activity.isCompliant = allowedSites.includes(activity.name);
  }
};

module.exports = { addIsCompliantFields };