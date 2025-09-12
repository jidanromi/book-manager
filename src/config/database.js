const { Sequelize } = require("sequelize");

// untuk ini bisa diganti sesuai dengan penamaan masing-masing sqlserver
const sequelize = new Sequelize("BookDB", "jidan", "polman", {
  host: "VivoBookX415JA",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: false
    }
  },
  logging: false
});

module.exports = sequelize;
