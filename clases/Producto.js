class Producto{
    constructor(data){
        //console.log(data);
        
        this.id=data.id;
        this.nombre=data.nombre;
        this.marca=data.marca;
        this.codigo=data.codigo;
        this.salt=data.salt;
        this.tipoProducto=data.tipoProducto;
    }
    set id(id){
        this._id=id; 
    }

    set nombre(nombre){
        const nombreRegex=/^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (nombreRegex.test(nombre)){
            this._nombre=nombre;
        }
    }

    set marca(marca=""){
        if (marca.length>0){
            this._marca=marca;
        }
    }

    set codigo(codigo){
        this._codigo=codigo;
    }

    set salt(salt){
        this._salt=salt;
    }

    set tipoProducto(tipoProducto){
        this._tipoProducto=tipoProducto;
    }

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }

    get marca(){
        return this._marca;
    }

    get codigo(){
        return this._codigo;
    }

    get salt(){
        return this._salt;
    }

    get tipoProducto(){
        return this._tipoProducto;
    }

    get datos(){
        if(this.id!=undefined){
            return{
                id:this.id,
                nombre:this.nombre,
                marca:this.marca,
                codigo:this.codigo,
                salt:this.salt,
                tipoProducto:this.tipoProducto
            }   
        }
        else{
            return{
                nombre:this.nombre,
                marca:this.marca,
                codigo:this.codigo,
                salt:this.salt,
                tipoProducto:this.tipoProducto
            }
        }
    }
}

module.exports=Producto;

/*data={
    id:"pepelon",
    nombre:"santiago",
    usuario:"padrote",
    password:"12345"
}

const usuario1=new Usuario(data);
console.log(usuario1);*/