"use strict";

const express = require("express");
const sequelize = require("./sequelize"); //import bd

const statusRouter = require("./status");
require("dotenv").config();

//definire MODEL in models->  
const Student = require("./models/student"); //includ modelul
const Project = require("./models/project");
const MP = require("./models/mp");
const Test = require("./models/tst");
const Bug = require("./models/bug");
const Commit = require("./models/commit");


MP.belongsTo(Student);//, {foreignKey: 'studentID'}
MP.belongsTo(Project);//, {foreignKey: 'projectID'}

Test.belongsTo(Student);//, {foreignKey: 'studentID'}
Test.belongsTo(Project);//, {foreignKey: 'projectID'}

Commit.belongsTo(MP);//, {foreignKey: 'studentID'}
Commit.belongsTo(Project);//, {foreignKey: 'projectID'}

Bug.belongsTo(Commit);//, {foreignKey: 'studentID'}
Bug.belongsTo(Project);//, {foreignKey: 'projectID'}
Bug.belongsTo(Test)
/*
Student.hasMany(MP);//, {foreignKey: 'studentID'}

Project.hasMany(MP);//, {foreignKey: 'projectID'}
*/

//Project.belongsToMany(Student, { through: MP });
//Student.belongsToMany(Project, { through: MP });

//MP.belongsTo(Student, {foreignKey: 'studentID'});//, foreignKeyConstraint: true
//MP.belongsTo(Project, {foreignKey: 'projectID'});//, foreignKeyConstraint: true}

const app = express();

//pt partea de body, express.json
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

//inserez RUTE definite pt GET, POST in 'routes'-> employees.js

app.use("/", require("./routes/students"));
//GET: http://localhost:7250/api/employees  
app.use("/", require("./routes/projects"));
app.use("/", require("./routes/mps"));
app.use("/", require("./routes/tsts"));
app.use("/", require("./routes/bugs"));
app.use("/", require("./routes/commits"));


app.use("/status", statusRouter); //http://localhost:8000/status


app.set((err, req,  res, next) => {
  res.status(500).json({error: "Something broke"})
});

app.get("/create", async (req, res, next) => {
  try {
    await sequelize.sync({ force: true });
    res.status(201).json({ message: "Database created with the models." });
  } catch (err) {
    next(err);
  }
});

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), async() => {
  console.log(`Server started on http://localhost:${app.get("port")}`);

  try {
    await sequelize.authenticate(); //await - pt ca metoda e asincrona
    console.log("Connection has been established successfully");
  } catch(error) {
    console.error("Unable to connect to the database: ", error);
}
});
