module.exports = (sequelize, DataTypes) => {
  const ActivityProfileItem = sequelize.define("ActivityProfileItem", {
    name: DataTypes.STRING,
    expectedTime: DataTypes.INTEGER,
  });
  
  ActivityProfileItem.associate = db => {
    ActivityProfileItem.belongsTo(db.ActivityProfile, {
      foreignKey: "activityProfileId",
      targetKey: "id"
    });
  };

  return ActivityProfileItem;
};