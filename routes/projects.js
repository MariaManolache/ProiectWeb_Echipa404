const Project = require("../models/project");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5

router 
    .route("/projects")
    //vizualizare project uri
    .get(async (req, res)  => {
        try {
            const projects = await Project.findAll({
            });

            return res.status(200).json(projects);

        } catch(err) {
            return res.status(500).json(err);
        }
    })

    //adaugare project nou
    .post(async (req, res) => {
        try {
            const newProject = await Project.create(req.body);
            return res.status(200).json(newProject);
        } catch(err) {
            return res.status(500).json(err);
        }
    })
    

module.exports  = router;