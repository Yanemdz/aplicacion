var rutas=require("express").Router();
var {mostrarProductos, nuevoProducto, borrarProducto, buscarPorId} = require("../bd/productosBD");
//var {Router}=require("express");

rutas.get("/", async(req, res)=>{
    //res.send("Hola estas en raíz");
    var productosValidos = await mostrarProductos();
    //console.log(ProductosValidos);
    res.json(productosValidos);
});

rutas.get("/buscarPorId/:id",async(req,res)=>{
    var productoValido = await buscarPorId(req.params.id);
    res.json(productoValido);
});

rutas.post("/nuevoProducto",async(req,res)=>{
    console.log(req.body);
    var productoGuardado = await nuevoProducto(req.body);
    res.json(productoGuardado);
    //res.end();
});

rutas.delete("/borrarProducto/:id",async(req,res)=>{
    var productoBorrado = await borrarProducto(req.params.id);
    res.json(productoBorrado);
});

module.exports=rutas;