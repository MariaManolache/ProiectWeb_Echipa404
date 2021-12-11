const Commit = require("../models/commit");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5
const MP = require("../models/mp");
const Project = require("../models/project");

router 
    .route("/commits")
    //vizualizare commit uri
    .get(async (req, res)  => {
        try {
            const commits = await Commit.findAll({
            });

            return res.status(200).json(commits);

        } catch(err) {
            return res.status(500).json(err);
        }
    })

    //adaugare commit nou
    // .post(async (req, res) => {
    //     try {
    //         const newCommit = await Commit.create(req.body);
    //         return res.status(200).json(newCommit);
    //     } catch(err) {
    //         return res.status(500).json(err);
    //     }
    // })
    router
    .route("/mps/:mpID/projects/:projectID/commits")

    .post(async (req, res, next) => {
        try {
          const mp = await MP.findByPk(req.params.mpID);
          const project = await Project.findByPk(req.params.projectID);

          if (mp && project) {
            const commit = new Commit(req.body);

            commit.mpID = mp.ID;
            commit.projectID = project.ID;

            await commit.save();

            res.status(201).json({ message: 'Commit crated!'});
          } else {
            res.status(404).json({ message: '404 - Student or Project Not Found'});
          }
        } catch (error) {

          next(error);
        }
    });
    
    
module.exports  = router;