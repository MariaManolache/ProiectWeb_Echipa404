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
    },
    repository: {
        type: DataTypes.STRING,
    },   
    teamName: {
        type: DataTypes.STRING,
    }
    
});

module.exports = Project;