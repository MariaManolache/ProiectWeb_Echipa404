const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Project = sequelize.define(
    'project', {
    ID: {
        type: DataTypes.UUID, //universally unique identifier
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },    
    projectName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    repository: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
});

module.exports = Project;