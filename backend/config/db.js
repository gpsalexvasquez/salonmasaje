const path = require('path');
const { Sequelize } = require('sequelize');

const dbPath = path.resolve(__dirname, '..', 'database', process.env.DB_NAME || 'estudiantes.db');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});

module.exports = sequelize;