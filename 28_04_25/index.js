//Importar el modulo de http que viene incluido en Node.js
const serverCreadoHTTP = require('http');

//Definimos el puerto deonde va ha tener salida nuestro servidor
const puertoSalida = 3308;

//Crear el servidor
const servidorCreado = serverCreadoHTTP.createServer((req,res)=>{
    //Establecer  el encabezado de respuesta
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hola mundo desde Node.js con el modulo http bandera 1');
});

servidorCreado.listen(puertoSalida,()=>{
    console.log(`Servidor en escuha desde: http://127.0.0.1:${puertoSalida}`)
});

