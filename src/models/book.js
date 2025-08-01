'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Author, { foreignKey: 'authorId' });
      Book.hasMany(models.Borrow, {foreignKey: 'userId'});

    }
  }
  Book.init({
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    year_published: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};