const Project = require("../models/project");

const router = require("express").Router();

const { Op } = require('sequelize'); //importam operatorii din sequelize pt 5
const MP = require("../models/mp");

router
    .route("/projects")
    //vizualizare project uri
    .get(async (req, res) => {
        try {
            const projects = await Project.findAll({
            });

            return res.status(200).json(projects);

        } catch (err) {
            return res.status(500).json(err);
        }
    })

    //adaugare project nou
    .post(async (req, res) => {
        try {
            const newProject = await Project.create(req.body);
            return res.status(200).json(newProject);
        } catch (err) {
            return res.status(500).json(err);
        }
    })


router
    .route("/mps/:mpID/projects/:projectID")
    //vizualizare project uri
    .put(async (req, res, next) => {
        try {
            const mp = await MP.findByPk(req.params.mpID);
            const project = await Project.findByPk(req.params.projectID);
            if (mp && project) {
                if (project.ID === mp.projectID) {
                    await project.update(req.body);
                    res.status(201).json({ message: 'Updated project!' });
                } else {
                    res.status(404).json({ message: 'This MP is not part of this project' });
                }
            } else {
                res.status(404).json({ message: '404 - MP or project not found' });

            }
        } catch (error) {
            next(error);
        }
    

    });
    router
    .route("/projects/:repository")
    //vizualizare project uri
    .get(async (req, res) => {
        try {
            const projects = await Project.findOne(({ where:{ repository: req.params.repository }}));

            return res.status(200).json(projects);

        } catch (err) {
            return res.status(500).json(err);
        }
    })
        module.exports = router;