// Importacion de express
const express=require('express');

const path =require('path');


//Instanciar Express
const app=express();

//Puerto
const port=3059;

app.get('/', (req,res)=>{
    //res.send("Hola mundo");
    //res.sendFile("C:/Users/CRACK/Documents/Universidad/6_semestre/ProgramacionWeb2/0505/index.html");
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
});