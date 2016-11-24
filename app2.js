var http = require("http");

var manejador = function(solicitud,respuesta){
  console.log("respuesta recibida");
  //te lo muestra en cosola para poder hacer "pruebas"
  respuesta.end("Hola mundo y la wea");

};
 var servidor = http.createServer(manejador);
 servidor.listen(8080);
