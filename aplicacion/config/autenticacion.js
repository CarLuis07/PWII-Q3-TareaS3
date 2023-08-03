const {configuracionBaseDatos}= require("./configuracion")
function autenticar(usuario, password) {
    if (usuario === configuracionBaseDatos.usuario && password === configuracionBaseDatos.password) {
        console.log("autenticado")
    }else{
        console.log("no autenticado")
    }
}

module.exports = { autenticar }