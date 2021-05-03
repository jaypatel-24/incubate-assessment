const express = require('express');
const router = express.Router();

const Document_1 = require('../models/Document_1')
const Document_2 = require('../models/Document_2')

// @route     GET  /
// @desc      populate the database uisng middlware and use join to merge collections
// @access    public

router.get('/data', async (req,res) => {
    Document_1.aggregate([
        //{ $limit: 10 },

        {$sort: {"_id": 1}},

        {
            $lookup: {
                from: 'document_2',
                localField: 'email',
                foreignField: 'email',
                as: 'output'
            }
        },
        {
            $project : {
                _id: 0,
                'output.team_name': 1,
                full_name:1,
                email: 1,
                number: 1,
                city: 1,
                url: 1
            }
        }
]).then(result => res.json(result)).catch(err => console.log(err));

});

// router.get('/doc1',async (req,res) => {
//     let doc1 = await Document_1.find().sort({'_id' : 1});
//     res.json(doc1);
// });

// router.get('/doc2',async (req,res) => {
//     let doc2 = await Document_2.find().sort({'email' : 1});
//     res.json(doc2);
// });

//then(result => res.json(result)).catch(err => console.log(err));

module.exports = router;
