module.exports = (sequelize, DataTypes) => {
  const ActivityStream = sequelize.define("ActivityStream", {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    timestamp: "TIMESTAMP",
    timespent: DataTypes.INTEGER,
  });
  
  return ActivityStream;
};