    'use strict';
    module.exports = (sequelize, DataTypes) => {
      var User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
      }, {});
      User.associate = function(models) {
        // associations can be defined here
          models.User.HasMany(models.Message);
          models.User.HasOne(models.Profile);
      };
      return User;
    };