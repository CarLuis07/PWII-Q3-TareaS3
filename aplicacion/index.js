const { Inventario } = require("./models/inventario")
const {configuracionBaseDatos}=require("./config/configuracion")
const {autenticar}=require("./config/autenticacion")
const {ejemplosArreglos}=require("./models/ejemplosArreglos")

console.log("-----------------Inicio De Aplicacion---------------");

ejemplosArreglos();