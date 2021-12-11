const MP = require("../models/mp");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5
const Student = require("../models/student");
const Project = require("../models/project");

router 
.route("/mps")
    //vizualizare mp uri
    .get(async (req, res)  => {
        try {
            const mps = await MP.findAll({
            });

            return res.status(200).json(mps);

        } catch(err) {
            return res.status(500).json(err);
        }
    })

    //adaugare mp nou
    /*
    .post(async (req, res) => {
        try {
            const newMP = await MP.create(req.body);
            return res.status(200).json(newMP);
        } catch(err) {
            return res.status(500).json(err);
        }
    })
    */
router
    .route("/students/:studentID/projects/:projectID/mps")

    .post(async (req, res, next) => {
        try {
          const student = await Student.findByPk(req.params.studentID);
          const project = await Project.findByPk(req.params.projectID);

          if (student && project) {
            const mp = new MP(req.body);

            mp.studentID = student.ID;
            mp.projectID = project.ID;

            await mp.save();

            res.status(201).json({ message: 'MP crated!'});
          } else {
            res.status(404).json({ message: '404 - Student or Project Not Found'});
          }
        } catch (error) {

          next(error);
        }
    });
    

module.exports  = router;