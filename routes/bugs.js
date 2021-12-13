const Bug = require("../models/bug");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5
const TST = require("../models/tst");
const Project = require("../models/project");
const Commit = require("../models/commit");
const MP = require("../models/mp");

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
    .route("/tsts/:tstID/projects/:projectID/commits/:commitID/bugs/enrollements")

    .post(async (req, res, next) => {
        try {
          const tst = await TST.findByPk(req.params.tstID);
          const project = await Project.findByPk(req.params.projectID);
          const commit = await Commit.findByPk(req.params.commitID);

          if (tst && project && commit) {
            const bug = new Bug(req.body);

            bug.tstID = tst.ID;
            bug.projectID = project.ID;
            bug.commitID = commit.ID;

            await bug.save();

            res.status(201).json({ message: 'Bug created!'});
          } else {
            res.status(404).json({ message: '404 - Student or Project Not Found'});
          }
        } catch (error) {

          next(error);
        }
    });


    router
    .route("/mps/:mpID/bugs/:bugID/enrollements")

    .put(async (req, res, next) => {
      try {
        const mp = await MP.findByPk(req.params.mpID);
        const bug = await Bug.findByPk(req.params.bugID);
        if (mp && bug) {
            await bug.update({ mpID: mp.ID});
            res.status(201).json({ message: 'Added MP to the bug!'});
          } else {
            res.status(404).json({ message: '404 - MP or bug not found'});
          
        }
      } catch (error) {
        next(error);
      }
    });


    router
    .route("/mps/:mpID/bugs/:bugID/status")

    .put(async (req, res, next) => {
      try {
        const mp = await MP.findByPk(req.params.mpID);
        const bug = await Bug.findByPk(req.params.bugID);
        if (mp && bug) {
          if(bug.mpID === mp.ID) {
            if(bug.status === false) {
            await bug.update({ status: true});
            res.status(201).json({ message: 'Resolved bug!'});
            } else {
              res.status(404).json({ message: 'This bug is already resolved'});
            }
          } else {
            res.status(404).json({ message: 'This MP is not assigned to this bug'});
          }
          } else {
            res.status(404).json({ message: '404 - MP or bug not found'});
          
        }
      } catch (error) {
        next(error);
      }
    });


    
    



module.exports  = router;