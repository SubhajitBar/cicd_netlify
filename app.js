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

app.get("/hint/get", (req, res) => res.send(
    `<h2>enter /api/data to get all data</h2>
    <h2>enter /api/data/10 to get 10 data</h2>`
    )
);

app.use(ErrorMiddleware);