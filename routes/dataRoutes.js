import express from "express";
import { addJsonData, deleteAllData, get10Data, getAllData } from "../controller/dataController.js";

const router = express.Router();

router.route("/data").get(getAllData).post(addJsonData).delete(deleteAllData);
router.route("/data/10").get(get10Data);

export default router;