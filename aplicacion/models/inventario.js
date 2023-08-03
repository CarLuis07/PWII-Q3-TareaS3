const Cryptr = require("cryptr");

const {ConfiguracionCrypto}= require("../config/configuracion")
const cryptr = new Cryptr(ConfiguracionCrypto.llaveSecreta)



console.log("-----------------App Modo Desarrollo---------------");

class Inventario {
    //variables con valores por defecto o que no vamos a ocupar declarar en el constructor
    categoria = "";
    cant = 0;
    departamento = "Infotectología";
    //variables privadas de esta clase
    #password
    #PasswordEncriptado

    //primer metodo que se llama al instanciar la clase Inventario
    constructor(nombreProducto = "", personaEncargada = "",password) {
        //asiganamos valores a las propiedades que pasamos por parametros
        this.id = 1;
        this.nombreProducto = nombreProducto;
        this.personaEncargada = personaEncargada;
        this.#password = password;
    }
    
    //metodos privados de esta clase Inventario
    #prepararSecreto() {
        this.#PasswordEncriptado = cryptr.encrypt(this.#password);
    }
    get ObtenerSecreto() {
        return this.#PasswordEncriptado;
    }


    //metodo get para que solo se puedan leer datos no cambiarlos ejemplo id
    get idProducto() {
        return `${this.id}`
    }

    //metodo para mostrar salida
    mostrarDatos() {
        console.log(this.id, "Este ", this.nombreProducto, " pertenece a ", this.departamento, " y su persona encargada es ", this.personaEncargada)
    }
}

module.exports= {Inventario}