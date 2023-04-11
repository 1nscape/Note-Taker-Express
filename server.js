const express = require("express");
const app = express();

const apiRoute = require("./routes/apiroutes");
const htmlRoute = require("./routes/htmlroutes"); 

const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.use(express.static("./assets/public"));

app.listen(PORT, () => {
    console.log("Listening to ${PORT}");
});


















