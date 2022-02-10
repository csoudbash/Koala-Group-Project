const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET
koalaRouter.get('/', (req,res) => {
    let queryText = 'SELECT * FROM "koalas";';
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch( error => {
        console.log('error getting koalas',error);
        res.sendStatus(500);
    });
});

// POST
koalaRouter.post('/', (req,res) => {
    const koala = req.body;
    console.log(req.body);
    const queryText = `
    INSERT INTO "koalas" ("name", "gender", "age", "readyForTransfer", "notes")
    VALUES ( $1, $2, $3, $4, $5);`;
    // parameterized query prevents SQL injection
    pool.query(queryText, [koala.name, koala.gender, koala.age, koala.readyForTransfer, koala.notes])
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {

            res.sendStatus(500);
        })
})

// PUT


// DELETE

module.exports = koalaRouter;