const renameProperties = (obj, fromToMapping) => {
  const result = {};

  for (const key in obj) {
    const resultKey = fromToMapping[key] || key;
    result[resultKey] = obj[key];
  }

  return result;
};

const prepareUserForOutput = user => {
  if (user.toJSON) {
    user = user.toJSON();
  }

  return renameProperties(user, {
    "firstName": "first_name",
    "lastName": "last_name",
    "browserAgent": "browser_agent",
    "isManager": "is_manager",
    "isAdmin": "is_admin",
    "teamId": "team_id",
    "activityProfileId": "activity_profile_id",
    "organizationId": "organization_id",
  });
};

const prepareOrganizationForOutput = organization => {
  if (organization.toJSON) {
    organization = organization.toJSON();
  }

  delete organization.adminId;
  return organization;
};

const prepareActivityStreamForOutput = activityStream => {
  if (activityStream.toJSON) {
    activityStream = activityStream.toJSON();
  }

  return renameProperties(activityStream, {
    "startTime": "start_time",
    "endTime": "end_time",
    "userId": "user_id",
  });
};

const prepareActivityProfileItemForOutput = activityProfileItem => {
  if (activityProfileItem.toJSON) {
    activityProfileItem = activityProfileItem.toJSON();
  }

  return renameProperties(activityProfileItem, {
    "expectedTime": "expected_time",
    "activityProfile": "activity_profile_id",
  });
};

const prepareTeamForOutput = team => {
  if (team.toJSON) {
    team = team.toJSON();
  }

  return renameProperties(team, {
    "managerId": "manager_id",
  });
};

module.exports = {
  prepareUserForOutput,
  prepareOrganizationForOutput,
  prepareActivityStreamForOutput,
  prepareActivityProfileItemForOutput,
  prepareTeamForOutput,
};