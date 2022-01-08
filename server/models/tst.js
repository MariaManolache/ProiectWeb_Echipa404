const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const TST = sequelize.define(
    'tst', {
        ID: {
            type: DataTypes.UUID, //universally unique identifier
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }
    // studentID: {
    //     type: DataTypes.INTEGER, 
    //     references: {
    //         model: 'Student',
    //         key: 'studentID'
    //       }
    // },    
    // projectID: {
    //     type: DataTypes.INTEGER, 
    //     references: {
    //         model: 'Project',
    //         key: 'projectID'
    //       }
    // }
});

module.exports = TST;