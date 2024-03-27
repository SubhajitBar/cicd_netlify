import mongoose from "mongoose";

const schema = new mongoose.Schema({
    // end_year: Number || String,
    // intensity: Number || String,
    // sector: String,
    // topic: String,
    // insight: String,
    // url: String,
    // region: String,
    // start_year: Number || String,
    // impact: Number || String,
    // added: String,
    // published: String,
    // country: String,
    // relevance: Number || String,
    // pestle: String,
    // source: String,
    // title: String,
    // likelihood: Number || String
},{strict: false});

export const JsonData = mongoose.model("data", schema);