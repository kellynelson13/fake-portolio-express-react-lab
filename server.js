const cors = require("cors");
const express = require("express");
const projects = require("./projects.json");
const about = require("./about.json");

const app = express();

//set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
    res.send("hello portfolio")
})

//route for retrieving projects
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
})

//route for retrieving about info
app.get("/about", (req, res) => {
    // send about info via JSON
    res.json(about);
})

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

//turn on the server listener
app.listen(PORT, console.log(`Listening at port ${PORT}`))