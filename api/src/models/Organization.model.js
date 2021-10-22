module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define("Organization", {
    name: DataTypes.STRING,
  });

  Organization.associate = db => {
    Organization.belongsTo(db.User, {
      foreignKey: 'adminId',
      targetKey: 'id',
    });
  };

  return Organization;
};