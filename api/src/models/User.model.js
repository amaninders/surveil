module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    browserAgent: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isManager: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });

  User.associate = db => {
    User.belongsTo(db.ActivityProfile, {
      foreignKey: "activityProfileId",
      targetKey: "id",
    });

    User.belongsTo(db.Organization, {
      foreignKey: "organizationId",
      targetKey: "id",
    });

    User.belongsTo(db.Team, {
      foreignKey: "teamId",
      targetKey: "id",
      constraints: false,
    });
  };

  return User;
};