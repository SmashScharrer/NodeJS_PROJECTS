// Step 1 : Require Packages
let express = require("express");
let app = express();


// Step 2 : Server Params
const port = 3000;


// Step 2 : Create Routing

// 2.1 : Main Page
app.get("/", (req, res) => {

    res.status(200);
    res.send("Home Page");

});

// 2.2 : Welcome Page
app.get("/welcome", (req, res) => {

    res.status(200);
    res.send("Sorry, please give a name !");

});

// 2.3 : Welcome Page with a GET Data
app.get("/welcome/:name", (req, res) => {

    res.status(200);
    console.log("Nom : " + req.params.name);
    res.send("Welcome, " + req.params.name);

});

// 2.4 : 404 Page
app.get("*", (req, res) => {

    res.status(404);
    res.send("Error 404");

});


// Step 3 : Start Server
app.listen(port);
console.log("Server running : http://localhost:" + port + "/");