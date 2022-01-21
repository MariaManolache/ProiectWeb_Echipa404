const MP = require("../models/mp");

const router = require("express").Router();

const { Op } = require('sequelize'); //importam operatorii din sequelize pt 5
const Student = require("../models/student");
const Project = require("../models/project");
const TST = require("../models/tst");
const Bug = require("../models/bug");

router
    .route("/mps")
    //vizualizare mp uri
    .get(async (req, res) => {
        try {
            const mps = await MP.findAll({
            });

            return res.status(200).json(mps);

        } catch (err) {
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
    .route("/students/:studentID/projects/:projectID/mps/enrollements")

    .post(async (req, res, next) => {
        try {
            const student = await Student.findByPk(req.params.studentID);
            const project = await Project.findByPk(req.params.projectID);

            if (student && project) {
                const mp = new MP(req.body);

                mp.studentID = student.ID;
                mp.projectID = project.ID;

                await mp.save();

                res.status(200).json({ message: 'MP crated!' });
            } else {
                res.status(404).json({ message: '404 - Student or Project Not Found' });
            }
        } catch (error) {

            next(error);
        }
    });

router
    // Verificam daca studentul respectiv este MP; eroare daca nu este 
    .route("/students/:idStudent/mps/:idMP/projects/:idProject/enrollements")
    .post(async (req, res) => {
        try {
            const student = await Student.findByPk(req.params.idStudent);
            if (student) {
                const project = await Project.findByPk(req.params.idProject);
                const mp = await MP.findByPk(req.params.idMP);
                if (mp) {

                    if (mp.projectID === req.params.idProject && project) {
                        return res.status(500).json({ message: "This student is an mp, so he can not be a tester" });
                    }
                }
                else if (project) {
                    const tst1 = await TST.findOne(({ where: [{ studentID: req.params.idStudent }, { projectID: req.params.idProject }] }));
                    if (tst1) {
                        return res.status(500).json({ message: "This tester is already enrolled in the project" });
                    } else {
                        const tst = new TST(req.body);

                        tst.studentID = student.ID;
                        tst.projectID = project.ID;

                        await tst.save();


                        res.status(201).json({ message: 'TST created!' });
                    }

                } else {
                    return res.status(500).json({ message: "The project doesn't exist" });
                }
            } else {
                return res.status(500).json({ message: "This student doesn't exits" });
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    })

router
    .route("/students/:idStudent/bugs")
    //vizualizare bug uri pentru un anumit MP
    .get(async (req, res) => {
        try {
            const student = await Student.findByPk(req.params.idStudent);
            const bugsList = [];
            if (student) {
                const mps = await MP.findAll({ where: { studentID: req.params.idStudent } });
                if (mps) {
                    for (let mp of mps) {
                        const project = await Project.findByPk(mp.projectID);
                        // console.log(project.ID);
                        if (project) {
                            const bugs = await Bug.findAll({ where: { projectID: project.ID } });
                            console.log(bugs);
                            if (bugs) {
                                for (let bug of bugs) {
                                    bugsList.push(bug);
                                    //console.log(bug.id);
                                }
                            }

                        }
                    }
                    return res.status(200).json(bugsList);
                } else {
                    return res.status(500).json({ message: "This student is not an MP for any project" });
                }
            } else {

                return res.status(500).json({ message: "This student doesn't exist" });
            }


        } catch (err) {
            return res.status(500).json(err);
        }
    })


router
    .route("/mps/:mpID/students/:studentID/projects/:projectID/enrollements")

    .post(async (req, res, next) => {
        try {
            const mp = await MP.findByPk(req.params.mpID);
            const student = await Student.findByPk(req.params.studentID);
            const project = await Project.findByPk(req.params.projectID);

            if (student && project && mp) {
                if (mp.projectID === req.params.idProject) {
                    const mps = await MP.findAll({ where: { studentID: req.params.studentID } });
                    let ok = 1;
                    for (mpItem of mps) {
                        if (mpItem.projectID === req.params.projectID) {
                            ok = 0;
                        }
                    }
                    if (ok === 1) {
                        const mp = new MP();

                        mp.studentID = student.ID;
                        mp.projectID = project.ID;

                        await mp.save();
                        res.status(201).json({ message: 'MP added to the project!' });
                    } else {
                        res.status(401).json({ message: 'The student is already part of this project' });
                    }
                } else {
                    res.status(401).json({ message: 'The MP is not part of this project' });
                }

            } else {
                res.status(404).json({ message: '404 - Student or Project or MP Not Found' });
            }
        } catch (error) {

            next(error);
        }
    });

router
    .route("/mps/:mpID/mps/:mpID2/enrollements")

    .delete(async (req, res, next) => {
        try {
            const mp = await MP.findByPk(req.params.mpID);
            const mpDelete = await MP.findByPk(req.params.mpID2);

            if (mpDelete && mp) {
                if (mpDelete.projectID === mp.projectID) {
                    await mpDelete.destroy();

                    res.status(201).json({ message: 'MP deleted from this project!' });
                } else {
                    res.status(401).json({ message: 'You can not delete an MP that is not part of your project' });
                }

            } else {
                res.status(404).json({ message: '404 - One of the MPs Not Found' });
            }
        } catch (error) {

            next(error);
        }
    });

router
    .route("/students/:studentID/mps")

    .get(async (req, res, next) => {
        try {
            
            const student = await Student.findByPk(req.params.studentID);
            const mps = await MP.findAll({ where: { studentID: req.params.studentID } });


            if (student&&mps) {
                
                        return res.status(200).json(mps);
                    }
                    else {
                        return res.status(500).json({message: "MP not found"});
                    }
        
                

           
        } catch (error) {

            next(error);
        }
    });

module.exports = router;