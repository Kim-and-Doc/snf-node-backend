const {
  Model, Sequelize, Deferrable,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // ?hasMany foreignKey value is the same referred in belongsTo side. (ex. Post -> userId)
      this.hasMany(Post, { foreignKey: 'userId' });
    }
  }
  User.init({
    userId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    joinedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    profileImage: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
    friends: {
      type: DataTypes.ARRAY({
        type: DataTypes.UUID,

        references: {
          model: User,

          key: 'userId',

          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
      }),
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
