// Imports
var express = require('express');

// Instantiate
var server = express();

// Route configuration
server.get('/', function (req, res) {
   res.setHeader('Content-Type', 'text/html');
   res.status(200).send('<h1>Connexion réussie sur le serveur</h1>');

});

// Server Launch
server.listen(8080, function () {
    console.log('Serveur en écoute :)');
});

