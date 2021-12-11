const Bug = require("../models/bug");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5
const TST = require("../models/tst");
const Project = require("../models/project");
const Commit = require("../models/commit");

router 
    .route("/bugs")
    //vizualizare bug uri
    .get(async (req, res)  => {
        try {
            const bugs = await Bug.findAll({
            });

            return res.status(200).json(bugs);

        } catch(err) {
            return res.status(500).json(err);
        }
    })

    //adaugare bug nou
    // .post(async (req, res) => {
    //     try {
    //         const newBug = await Bug.create(req.body);
    //         return res.status(200).json(newBug);
    //     } catch(err) {
    //         return res.status(500).json(err);
    //     }
    // })
    router
    .route("/tsts/:tstID/projects/:projectID/commits/:commitID/bugs")

    .post(async (req, res, next) => {
        try {
          const tst = await TST.findByPk(req.params.tstID);
          const project = await Project.findByPk(req.params.projectID);
          const commit = await Commit.findByPk(req.params.commitID);

          if (tst && project&&commit) {
            const bug = new Bug(req.body);

            bug.tstID = tst.ID;
            bug.projectID = project.ID;
            bug.commitID = commit.ID;

            await bug.save();

            res.status(201).json({ message: 'Bug crated!'});
          } else {
            res.status(404).json({ message: '404 - Student or Project Not Found'});
          }
        } catch (error) {

          next(error);
        }
    });
    
    



module.exports  = router;