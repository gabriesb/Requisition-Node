function soma(a, b) {
    return a + b;
  }
  
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  
  
  app.use(bodyParser.json());
  
  
  app.get('/', function(req, res) {
    res.send('Oi, mundo :-)');
  });
  

  app.post('/somar', function(req, res) {
    var body = req.body;
    
   
    if (!body.a || !body.b) {
      return res.status(400).send('Por favor, envie os parâmetros "a" e "b" no corpo da requisição');
    }
    
    var resultado = soma(Number(body.a), Number(body.b));
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
  });
  
  var port = 3001;
  app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`);
  });