function mensaje(nombre){
    return "Buenos dias "+nombre
}
console.log(mensaje("Humano"));

function horario(req, res, next) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    console.log(`Tú has consultado la ruta ${req.path} el día ${formattedDate} a la hora ${formattedTime}.`);
    next();
}
module.exports = { horario };