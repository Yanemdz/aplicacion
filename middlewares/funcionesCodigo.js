const { log } = require("console");
const crypto= require("crypto");

function encriptarCodigo(codigo){
    const salt =  crypto.randomBytes(32).toString("hex");
    //console.log(salt);
    const hash = crypto.scryptSync(codigo, salt, 100000, 64, "sha512").toString("hex");
    //console.log(hash);
    return {
        salt,
        hash
    }
}

function validarCodigo(codigo, salt, hash) {
    const hashEvaluar = crypto.scryptSync(codigo, salt, 100000, 64, "sha512").toString("hex");
    return hashEvaluar == hash;
}

function codigoAutorizado(){

}

function adminAutorizado(){

}

module.exports={
    encriptarCodigo,
    validarCodigo,
    codigoAutorizado,
    adminAutorizado
}

//validarPassword();
//encriptarPassword("abc");