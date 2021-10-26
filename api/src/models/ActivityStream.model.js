const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const ActivityStream = sequelize.define("ActivityStream", {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    startTime: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.NOW,
    },
    endTime: "TIMESTAMP",
  });
  
  ActivityStream.associate = db => {
    ActivityStream.belongsTo(db.User, {
      foreignKey: "userId",
      targetKey: "id",
    });
  };


  return ActivityStream;
};