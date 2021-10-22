module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define("Team", {
    name: DataTypes.STRING,
  });

  Team.associate = db => {
    Team.belongsTo(db.User, {
      foreignKey: "managerId",
      targetKey: "id",
    });
  };

  return Team;
};