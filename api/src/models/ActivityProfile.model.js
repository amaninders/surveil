module.exports = (sequelize, DataTypes) => {
  const ActivityProfile = sequelize.define("ActivityProfile", {
    name: DataTypes.STRING
  });

  return ActivityProfile;
};