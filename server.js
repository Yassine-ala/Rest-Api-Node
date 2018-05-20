// Imports
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter   = require('./apiRouter').router;

// Instantiate
var server = express();

// Body Parser config
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

// Route configuration
server.get('/', function (req, res) {
   res.setHeader('Content-Type', 'text/html');
   res.status(200).send('<h1>Connexion réussie sur le serveur</h1>');
});

server.use('/api/', apiRouter);

// Server Launch
server.listen(8080, function () {
    console.log('Serveur en écoute :)');
});

