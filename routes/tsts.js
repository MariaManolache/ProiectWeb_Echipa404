const TST = require("../models/tst");

const router =  require("express").Router();

const {Op}  =  require('sequelize'); //importam operatorii din sequelize pt 5

router 
    .route("/tsts")
    //vizualizare tst uri
    .get(async (req, res)  => {
        try {
            const tsts = await Bug.findAll({
            });

            return res.status(200).json(tsts);

        } catch(err) {
            return res.status(500).json(err);
        }
    })

    //adaugare tst nou
    .post(async (req, res) => {
        try {
            const newTST = await TST.create(req.body);
            return res.status(200).json(newTST);
        } catch(err) {
            return res.status(500).json(err);
        }
    })

module.exports  = router;