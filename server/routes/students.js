const Student = require("../models/student");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5
const MP = require("../models/mp");
const Project = require("../models/project");

router 
    .route("/students")
    //vizualizare studenti
    .get(async (req, res)  => {
        try {
            const students = await Student.findAll({
            });

            return res.status(200).json(students);

        } catch(err) {
            return res.status(500).json(err);
        }
    })

    //adaugare student nou
    .post(async (req, res) => {
        try {
            const newStudent = await Student.create(req.body);
            return res.status(200).json(newStudent);
        } catch(err) {
            return res.status(500).json(err);
        }
    })
    
    router 
    .route("/students/:email/students/:password")
    //vizualizare studenti
    .get(async (req, res)  => {
        try {
            const student = await Student.findOne(({ where: [{ email: req.params.email }, {password: req.params.password}]}));
            if(student) {
                return res.status(200).json(student);
            }
            else {
                return res.status(500).json({message: "Student not found"});
            }

        } catch(err) {
            return res.status(500).json(err);
        }
    })

    router 
    .route("/students/:email/")
    //vizualizare studenti
    .get(async (req, res)  => {
        try {
            const student = await Student.findOne(({ where:{ email: req.params.email }}));
            if(student) {
                return res.status(200).json(student);
            }
            else {
                return res.status(500).json({message: "Student not found"});
            }

        } catch(err) {
            return res.status(500).json(err);
        }
    })
    

    router 
    .route("/students/:idStudent/projects")
    //vizualizare proiectele unui anumit student pt care e MP
    .get(async (req, res)  => {
        try {
            const student = await Student.findOne(({ where:{ ID: req.params.idStudent }}));
            if(student) {
                const projectList =[]
                const mps = await MP.findAll(({ where:{ studentID: req.params.idStudent }}));
                if(mps) {
                    for(let mp of mps) {
                        const project = await Project.findByPk(mp.projectID);
                        projectList.push(project);
                    }
                    return res.status(200).json(projectList);
                } else {
                    return res.status(500).json({message: "This student is not an MP for any projects"});
                }

            }
            else {
                return res.status(500).json({message: "Student not found"});
            }

        } catch(err) {
            return res.status(500).json(err);
        }
    })
    




module.exports  = router;