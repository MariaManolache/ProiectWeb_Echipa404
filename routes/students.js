const Student = require("../models/student");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5

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
    



module.exports  = router;