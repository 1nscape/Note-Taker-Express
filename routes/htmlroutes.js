
const path = require("path"); 
const app = require("express").Router();

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "..public/assets/notes.html"));

});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..public/assets/index.html"))
});


