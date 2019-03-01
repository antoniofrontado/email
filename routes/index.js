var express = require('express');
var router = express.Router();
const request = require('request-promise');
var body = require('body-parser');
/* GET home page. */
router.post('/', function (req, res, next) {
  const options = {
    method: 'POST',
    url: 'http://api.tuloenvias.com/registro/crear/',
    body: {
      codapi: process.env.TULOENVIAS_CODEAPI,
      nombre: 'Antonio',
      apellido: 'Frontado',
      correo: 'frontado.antonio@gmail.com',
      sexo: 'M',
      educacion: 'Universitario',
      laboral: '',
      pais: '',
      ciudad: '',
      nacimiento: '',
      cel: '',
      id: '',
      grupo: 76941

    },
    json: true
  };

  request(options)
    .then(function (response) {
      res.json(response);
console.log(options);
    })
    .catch(function (err) {
      res.json(err);
    });
});

module.exports = router;
