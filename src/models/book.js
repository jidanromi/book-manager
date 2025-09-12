const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: "Books",
  timestamps: false
});

module.exports = Book;
