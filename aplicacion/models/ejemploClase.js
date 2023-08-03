console.log("el usuario de BD es:" + configuracionBaseDatos.usuario)
const inventario = new Inventario("Teclado", "Luis","hola");

autenticar("Usuario","Usuario1")
inventario.mostrarDatos();
inventario.idProducto = 3;
console.log(inventario.idProducto)
console.log(inventario.ObtenerSecreto);

