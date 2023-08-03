const { Inventario } = require("./inventario");

function ejemplosArreglos() {
    
const notas=[1,2,3]
    let listadoInventario = [{
        id: 1,
        nombre: "h",
        departamento:"g"
    },{
        id: 2,
        nombre: "t",
        apellido:"g"
    },{
            id: 3,
            nombre: "h",
            apellido:"g"
    },{
        id: 4,
                nombre: "h",
                apellido:"g"
    }
]
    
    
    
    //agregando al arreglo
    listadoInventario.push({
        id: 5,
        nombre: "nuevo",
        apellido: "hola"
   })
    console.log(listadoInventario);

    //modificar
    const inventarioModificado = listadoInventario.find((persona) => persona.id === 2)
    inventarioModificado.apellido = "mi mundo";
    console.log(listadoInventario);

    //eliminar
    listadoInventario = listadoInventario.filter((persona) => persona.id !== 5)
    console.log(listadoInventario);




    const personaE = listadoInventario.find( (persona) => persona.id === 1)
    console.log(personaE)

    const personaEn = listadoInventario.filter( (persona) => persona.nombre === "h")
    console.log(personaEn)


    const Inventario1= new Inventario("1","teclado","conta")
    const Inventario2= new Inventario("1","teclado","conta")
    const Inventario3= new Inventario("1","teclado","conta")
    const Inventario4 = new Inventario("1", "teclado", "conta")
    let nuevoI = [Inventario1, Inventario2];

    //agregar
    nuevoI.push(Inventario3, Inventario4)

    //modificar
    const inventarioModificado2 = listadoInventario.find((Inventario3) => Inventario3 === 2)
    inventarioModificado2.departamento = "conta";
    console.log(listadoInventario);


    //find
    const inventariE = listadoInventario.find( (Inventario1) => Inventario1.departamento === "Infotectología")
    console.log(inventariE)

    //filter
    const inventariEe = listadoInventario.filter( (Inventario2) => Inventario2.id === "3")
    console.log(inventariEe)

    //eliminar
    inve = listadoInventario.filter((Inventario4) => Inventario4 !== 2)
    console.log(inve);

}

module.exports={ ejemplosArreglos};