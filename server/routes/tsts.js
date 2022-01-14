// const TST = require("../models/tst");

// const router =  require("express").Router();

// const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5

// router 
//     .route("/tsts")
//     //vizualizare tst uri
//     .get(async (req, res)  => {
//         try {
//             const tsts = await Bug.findAll({
//             });

//             return res.status(200).json(tsts);

//         } catch(err) {
//             return res.status(500).json(err);
//         }
//     })

//     //adaugare tst nou
//     .post(async (req, res) => {
//         try {
//             const newTST = await TST.create(req.body);
//             return res.status(200).json(newTST);
//         } catch(err) {
//             return res.status(500).json(err);
//         }
//     })

// module.exports  = router;

const TST = require("../models/tst");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5
const Student = require("../models/student");
const Project = require("../models/project");

router 
.route("/tsts")
    //vizualizare mp uri
    .get(async (req, res)  => {
        try {
            const tsts = await TST.findAll({
            });

            return res.status(200).json(tsts);

        } catch(err) {
            return res.status(500).json(err);
        }
    })

   
router
    .route("/students/:studentID/projects/:projectID/tsts/enrollements")

    .post(async (req, res, next) => {
        try {
          const student = await Student.findByPk(req.params.studentID);
          const project = await Project.findByPk(req.params.projectID);

          if (student && project) {
            const tst = new TST(req.body);

            tst.studentID = student.ID;
            tst.projectID = project.ID;

            await tst.save();

            res.status(201).json({ message: 'TST created!'});
          } else {
            res.status(404).json({ message: '404 - Student or Project Not Found'});
          }
        } catch (error) {

          next(error);
        }
    });

    router 
    .route("/tsts/:idStudent/:idProject")
    //vizualizare testeri
    .get(async (req, res)  => {
        try {
            const tst = await TST.findOne(({ where: [ {studentID: req.params.idStudent }, {projectID: req.params.idProject }]}));
            if(tst) {
                return res.status(200).json(tst);
            }
            else {
                return res.status(500).json({message: "TST not found"});
            }

        } catch(err) {
            return res.status(500).json(err);
        }
    })

    router 
    .route("/students/:idStudent/tsts")
    //vizualizare testeri
    .get(async (req, res)  => {
        try {
            const tst = await TST.findOne(({ where: {studentID: req.params.idStudent }}));
            if(tst) {
                return res.status(200).json(tst);
            }
            else {
                return res.status(500).json({message: "TST not found"});
            }

        } catch(err) {
            return res.status(500).json(err);
        }
    })

    
   
    

module.exports  = router;