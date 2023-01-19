import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

//connect to database
const sql = postgres({database: "workout"});
const server = express();
const port = 3002;
server.use(expres.json());

//accept a get request
server.get("/workouts", (req, res) => {
    sql`SELECT * FROM workouts`.then(workouts => {
        res.json(workouts);
        res.status(200);
    })
})