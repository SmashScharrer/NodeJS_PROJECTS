// Step 1 : Require Pack  Packages
let express = require("express"),
    bodyParser = require("body-parser"),
    app = express();


// Step 2 : Server Params
const port = 3000;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());


// Step 3 : Create Routing

// 3.1 : Main Page
app.get("/", (req, res) => {

    res.status(200);
    res.render("template.ejs", {
        title: "NodeJS - Accueil",
        h1: "Bienvenue"
    });

});

// 3.2 : Page Formulaire
app.get("/formulaire", (req, res) => {

    res.status(200);
    res.render("formulaire.ejs", {
        title: "NodeJS - Formulaire",
        h1: "Nouvel Utilisateur"
    });

});

// 3.3 : Result Page
app.post("/result", (req, res) => {

    let nomUser = req.body.nameUser;
    let prenomUser = req.body.surnameUser;

    if(nomUser && prenomUser){

        res.status(200);
        res.render("resultat.ejs", {
            title: "NodeJS - Résultats",
            h1: "Résultat du Formulaire",
            nom: nomUser,
            prenom: prenomUser

        });

    }else{

        res.status(404);
        res.render("template.ejs", {
            title: "NodeJS - 404 Error",
            h1: "Error 404"
        });

    }

});

// 3.4 : 404 Error Page
app.get("*", (req, res) => {

    res.status(400);
    res.render("template.ejs", {
        title: "NodeJS - 404 Error",
        h1: "Error 404"
    });

});


// Step 4 : Start Server
app.listen(port);
console.log("Server running : http://localhost:" + port + "/");