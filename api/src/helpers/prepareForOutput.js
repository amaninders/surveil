const renameProperties = (obj, fromToMapping) => {
  const result = {};

  for (const key in obj) {
    const resultKey = fromToMapping[key] || key;
    result[resultKey] = obj[key];
  }

  return result;
};

const prepareUserForOutput = user => (renameProperties(user, {
  "firstName": "first_name",
  "lastName": "last_name",
  "browserAgent": "browser_agent",
  "isManager": "is_manager",
  "isAdmin": "is_admin",
  "teamId": "team_id",
  "activityProfileId": "activity_profile_id",
}));

module.exports = {
  prepareUserForOutput,
};