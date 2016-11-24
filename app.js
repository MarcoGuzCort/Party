var express = require('express');

var app = express();

app.get("/",function(req,res){
  //solo dominio
  //get es de http y es un protocolo de interdet
  //HTTP
    //metodos
      //get
      // post = peticion para un formulario.
//res.end("hola mundo")
res.send("caca");
//res.end("HOlIIIIII")

});

app.listen(8080);
