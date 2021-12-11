const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Bug = sequelize.define(
    'bug', {
    bugID: {
        type: DataTypes.UUID, //universally unique identifier
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },    
    projectID: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'Project',
            key: 'projectID'
          }
    },
    commitID: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'Commit',
            key: 'commitID'
          }
    },
    testerID: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'TST',
            key: 'studentID'
          }
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    severity: { //TODO enum
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: { //TODO enum
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
/*
type: DataTypes.ENUM,
        allowNull: false,
        values: ['ACTIVE', 'INACTIVE', 'FREEZED']
*/

module.exports = Bug;