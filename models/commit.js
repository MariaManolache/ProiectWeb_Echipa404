const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Commit = sequelize.define(
    'commit', {
    commitID: {
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
    mpID: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'MP',
            key: 'studentID'
          }
    }
  
});

module.exports = Commit;