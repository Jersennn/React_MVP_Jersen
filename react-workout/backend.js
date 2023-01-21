import express from "express";
// require('express');
// require('postgres');
// require('dotenv');
import postgres from "postgres";
import dotenv from "dotenv";


dotenv.config();

//connect to database
const sql = postgres({database: "workout"});
const server = express();
const port = 3002;
server.use(express.json());

// accept a get request
server.get("/workouts", (req, res, next) => {
    sql`SELECT * FROM workouts`.then(workouts => {
        res.json(workouts);
        res.status(200);
    })
})

// using a get request for a specific workout
server.get("/workouts/:id", (req, res, next) => {
    const id = req.params.id;
    sql`SELECT * FROM workouts WHERE id = ${id}`.then((result) => {
        if (result.length === 0) {
            res.set("Content-type", "text/plain");
            res.status(404);
            res.send("Not Found");
        } else {
            res.json(result[0]);
        }
    }).catch(next);
})

// using a post request
server.post("/workouts", (req, res, next) => {
    const work = req.body;
    const reqFields = ["workout", "amount"];
    const errors = [];
    for (let field of reqFields) {
        if (work[field] === undefined) {
            errors.push(`Missing workout ${field}`)
        }
    }
    const {workout, amount} = work;
    if (errors.length > 0) {
        res.status(422);
        res.send(error.join(" "));
    } else {
        sql`INSERT INTO workouts(workout, amount) VALUES(${workout}, ${amount}) RETURNING *`.then((result) => {
            res.status(201);
            res.json(result[0]);
        })
    }
})

// using a patch request
server.patch("/workouts/:id", (req, res, next) => {
    const id = req.params.id;
    const work = req.body;
    const {workout, amount} = work;
    sql`
    UPDATE workouts
    SET ${sql(req.body)}
    WHERE id = ${id} RETURNING *
    `.then((result) => {
        res.send(result[0]);
    })
})

// using a delete request
server.delete("/workouts/:id", (req, res) => {
    const id = req.params.id;
    sql`DELETE FROM workouts WHERE id = ${id} RETURNING *`.then((result) => {
        res.send(result[0]);
    })
})



// listen on port
server.listen(port, () => {
    console.log(`listening on ${port}`)
});