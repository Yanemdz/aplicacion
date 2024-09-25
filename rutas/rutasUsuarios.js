var rutas=require("express").Router();
var {mostrarUsuarios, nuevoUsuario, borrarUsuario, buscarPorId} = require("../bd/usuariosBD");
//var {Router}=require("express");

rutas.get("/", async(req, res)=>{
    //res.send("Hola estas en raíz");
    var usuariosValidos = await mostrarUsuarios();
    //console.log(usuariosValidos);
    res.json(usuariosValidos);
});

rutas.get("/buscarPorId/:id",async(req,res)=>{
    var usuarioValido = await buscarPorId(req.params.id);
    res.json(usuarioValido);
});

rutas.post("/nuevoUsuario",async(req,res)=>{
    console.log(req.body);
    var usuarioGuardado = await nuevoUsuario(req.body);
    res.json(usuarioGuardado);
    //res.end();
});

rutas.delete("/borrarUsuario/:id",async(req,res)=>{
    var usuarioBorrado = await borrarUsuario(req.params.id);
    res.json(usuarioBorrado);
});

module.exports=rutas;