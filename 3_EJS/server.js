// Step 1 : Require Packages
let express = require("express");
let app = express();


// Step 2 : Server Params
const port = 3000;


// Step 2 : Create Routing

// 2.1 : Main Page
app.get("/", (req, res) => {

    res.status(200);
    res.render("template.ejs", {
        title: "NodeJS Project - Accueil",
        h1: "Page d'Accueil",
        paragraphe: "Bienvenue sur cette magnifique application NodeJS"
    });

});

// 2.2 : Profil Page
app.get("/profil", (req, res) => {

    res.status(200);
    res.render("template.ejs",{
        title: "NodeJS - Profil",
        h1: "Page de Profil",
        paragraphe: "Veuillez saisir un nom"
    });

});

// 2.3 : Profil Page avec une donnée GET
app.get("/profil/:nom", (req, res) => {

    let nom = req.params.nom;

    res.status(200);
    res.render("template.ejs",{
        title: "NodeJS - Profil",
        h1: "Page de Profil",
        paragraphe: "Bonjour " + nom
    });

});

// 2.4 : 404 Page
app.get("*", (req, res) => {

    res.status(404);
    res.render("template.ejs", {
        title: "404 Error",
        h1: "Page not found",
        paragraphe: "La page demandé n'existe pas"
    });

});


// Step 3 : Start Server
app.listen(port);
console.log("Server running : http://localhost:" + port + "/");