const Commit = require("../models/commit");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5

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
    .post(async (req, res) => {
        try {
            const newCommit = await Commit.create(req.body);
            return res.status(200).json(newCommit);
        } catch(err) {
            return res.status(500).json(err);
        }
    })
    
module.exports  = router;