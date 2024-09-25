const {usuariosBD}=require("./conexion");
const Usuario=require("../clases/Usuario");
const {validarPassword, encriptarPassword}= require("../middlewares/funcionesPassword");

function validar(usuario){
    var valido=false;
    if(usuario.nombre!=undefined && usuario.usuario!=undefined && usuario.password!=undefined){
        valido=true;
    }
    return valido; 
}

async function mostrarUsuarios(){
   const usuarios=await usuariosBD.get();
   usuarios.forEach(usuario => {
       //console.log(usuario.id8);
       usuariosValidos=[];
       const usuario1=new Usuario({id:usuario.id,...usuario.data()});
       if(validar(usuario1.datos)){
           console.log("Entra aqui");
           usuariosValidos.push(usuario1.datos);
       }
   });
   return usuariosValidos;
}

async function buscarPorId(id){
    var usuarioValido;
    const usuario=await usuariosBD.doc(id).get();
    const usuario1=new Usuario({id:usuario.id,...usuario.data()});
    console.log(usuario1.datos);
    
    if (validar(usuario1.datos)){
        usuarioValido=usuario1.datos;
    }
    //console.log(usuarioValido);
    return usuarioValido;
}

async function nuevoUsuario(data){
    const {hash, salt} = encriptarPassword(data.password);
    data.password=hash;
    data.salt=salt;
    data.tipoUsuario="usuario";
    const usuario1 = new Usuario(data);
    console.log(usuario1.datos);
    
    var usuarioValido={};
    var usuarioGuardado=false;
    if(validar(usuario1.datos)){
        usuarioValido=usuario1.datos;
        await usuariosBD.doc().set(usuarioValido);
        usuarioGuardado=true;
    }
    return usuarioGuardado;
}

async function borrarUsuario(id) {
//console.log(await buscarPorId(id));
var usuarioBorrado=false;
    if (await buscarPorId(id)!=undefined) {
        //console.log("Se borrara al usuario");
        await usuariosBD.doc(id).delete();
        usuarioBorrado=true;
    }
    return usuarioBorrado;
}

module.exports={
    mostrarUsuarios,
    nuevoUsuario,
    borrarUsuario,
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