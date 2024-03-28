import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import dataRoutes from "./routes/dataRoutes.js";

config({
    path: "./config/config.env"
})
const app = express();

app.use("/api", dataRoutes);

export default app;

app.get("/", (req, res) => res.send(
    `<h2>enter /api/data to get all records</h2>
    <h2>enter /api/data/10 to get 10 records</h2>`
    )
);

app.get("/testNode", (req, res)=>{
    res.status(200).send(`Test node endpoint hit successfully with Port:${process.env.PORT}`);
})

app.use(ErrorMiddleware);