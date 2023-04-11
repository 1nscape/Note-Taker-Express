const fs = require("fs"); 
const app = require("express").Router();

var dataNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); 


app.get("/notes", (req, res) => {
    res.json(dataNotes);
});


app.post("/notes", (req, res) =>  {
    let newestNote = req.body; 
    let noteId = dataNotes.length;

    newestNote.id = noteId + 1; 

    dataNotes.push(newestNote); 

    fs.writeFileSync("./db/db.json", JSON.stringify(dataNotes))

    res.json(dataNotes);

});

module.exports = app; 

