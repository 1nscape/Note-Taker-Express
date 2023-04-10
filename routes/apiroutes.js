const fs = require("fs"); 
const app = require("express").Router();

var dataNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); 


