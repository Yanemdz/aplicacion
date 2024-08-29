const express = require('express');
const app=express();

const { horario } = require('./funciones2');
app.use(horario);

function mensaje(req,res,next){
    console.log("Hola");
    next();
}

app.listen(3000,()=>{
    console.log("Servidor en http://localhost:3000");
});