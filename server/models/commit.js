const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Commit = sequelize.define(
    'commit', {
    ID: {
        type: DataTypes.UUID, //universally unique identifier
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    link: {
        type: DataTypes.STRING,
        unique: true 
    }
    // ,    
    // projectID: {
    //     type: DataTypes.INTEGER, 
    //     references: {
    //         model: 'Project',
    //         key: 'projectID'
    //       }
    // },
    // mpID: {
    //     type: DataTypes.INTEGER, 
    //     references: {
    //         model: 'MP',
    //         key: 'studentID'
    //       }
    // }
  
});

module.exports = Commit;