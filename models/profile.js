'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    iduser: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    country: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
      models.Profile.belongsTo(models.User, {
          foreignKey: {
              allowNull: false
          }
      });
  };
  return Profile;
};