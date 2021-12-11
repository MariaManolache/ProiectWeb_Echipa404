const Bug = require("../models/bug");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5

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
    .post(async (req, res) => {
        try {
            const newBug = await Bug.create(req.body);
            return res.status(200).json(newBug);
        } catch(err) {
            return res.status(500).json(err);
        }
    })
    



module.exports  = router;