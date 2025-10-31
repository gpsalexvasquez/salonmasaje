// models/Estudiante.js
const { DataTypes } = require('sequelize'); 
const sequelize = require('../config/db.js');

const Estudiante = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.INTEGER,      
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'estudiantes',
    timestamps: false,
});

module.exports = Estudiante;