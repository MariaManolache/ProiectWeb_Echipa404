const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

//TODO legatura cu Student
const Student = require('./student');
const Project = require('./project');


const MP = sequelize.define(
    'mp', {
    ID: {
        type: DataTypes.UUID, //universally unique identifier
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }
    /*     
    studentID: {
        type: DataTypes.UUID, 
        references: {
            model: 'Student',
            key: 'studentID',
            //model: Student,
            //key: Student.studentID
          },
    },    
    projectID: {
        type: DataTypes.UUID, 
        references: {
            model: 'Project',
            key: 'projectID',
            //model: Project,
            //key: Project.projectID
          }
    },
    */
});

//Student.hasMany(MP);
//Project.hasMany(MP);

//Project.belongsToMany(Student, { through: MP });
//Student.belongsToMany(Project, { through: MP });

module.exports = MP;