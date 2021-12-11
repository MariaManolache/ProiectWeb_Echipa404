const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const TST = sequelize.define(
    'tst', {
    studentID: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'Student',
            key: 'studentID'
          }
    },    
    projectID: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'Project',
            key: 'projectID'
          }
    }
});

module.exports = TST;