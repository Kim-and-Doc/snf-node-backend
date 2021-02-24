const {
  Model, Sequelize,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment }) {
      // ?belongsTo foreignKey value is the fk in the associated model. (ex. User -> userId)
      this.belongsTo(User, { foreignKey: 'userId' });
      // ?hasMany foreignKey value is the same referred in belongsTo side. (ex. Comment -> postId)
      this.hasMany(Comment, { foreignKey: 'postId' });
    }
  }
  Post.init({
    postId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    numLikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    isFoodPost: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    textContent: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    imageContent: {
      type: DataTypes.STRING,
    },
    postedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
