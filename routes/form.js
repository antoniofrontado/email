
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var http = require("http");
var request = require('request');
app.use(bodyParser());
app.set('port', process.env.PORT || 3001);
var options = {
    host: "https://antoniofrontado.github.io/formulario/",
    method: "POST",
    headers: {
    },
    "nombre": "request.bodyParser.nombre",
    "apellido" : "request.bodyParser.apellido",
    "correo" : "request.bodyParser.correo"
};

console.log(bodyParser.nombre);
console.log(bodyParser.apellido);
console.log(bodyParser.correo);
