const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Student = sequelize.define(
    'student', {
    ID: {
        type: DataTypes.UUID, //universally unique identifier
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },    
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
        unique: true    //unicitatea criteriului de inregistrare student
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Student;