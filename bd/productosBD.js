const {productosBD}=require("./conexion");
const Producto=require("../clases/Producto");
const {validarCodigo, encriptarCodigo}= require("../middlewares/funcionesCodigo");

function validar(producto){
    var valido=false;
    if(producto.nombre!=undefined && producto.marca!=undefined && producto.codigo!=undefined){
        valido=true;
    }
    return valido; 
}

async function mostrarProductos(){
   const productos=await productosBD.get();
   productos.forEach(producto => {
       //console.log(producto.id);
       productosValidos=[];
       const producto1=new Producto({id:producto.id,...producto.data()});
       if(validar(producto1.datos)){
           console.log("Entra aqui");
           productosValidos.push(producto1.datos);
       }
   });
   return productosValidos;
}

async function buscarPorId(id){
    var productoValido;
    const producto=await productosBD.doc(id).get();
    const producto1=new Producto({id:producto.id,...producto.data()});
    console.log(producto1.datos);
    
    if (validar(producto1.datos)){
        productoValido=producto1.datos;
    }
    //console.log(productoValido);
    return productoValido;
}

async function nuevoProducto(data){
    const {hash, salt} = encriptarCodigo(data.codigo);
    data.codigo=hash;
    data.salt=salt;
    data.tipoProducto="producto";
    const producto1 = new Producto(data);
    console.log(producto1.datos);
    
    var productoValido={};
    var productoGuardado=false;
    if(validar(producto1.datos)){
        productoValido=producto1.datos;
        await productosBD.doc().set(productoValido);
        productoGuardado=true;
    }
    return productoGuardado;
}

async function borrarProducto(id) {
//console.log(await buscarPorId(id));
var productoBorrado=false;
    if (await buscarPorId(id)!=undefined) {
        //console.log("Se borrara al producto");
        await productosBD.doc(id).delete();
        productoBorrado=true;
    }
    return productoBorrado;
}

module.exports={
    mostrarProductos,
    nuevoProducto,
    borrarProducto,
    buscarPorId
}

//borrarUsuario("v1ZGS9SdfctcTyJwJqnap");
//mostrarUsuarios();
//buscarPorId("100");
/*var data={
    nombre:"Messi",
    usuario:"Meeeessi",
    password:"123"
}
nuevoUsuario(data);*/