const { registrar, leer, eliminar, actualizar } = require("./operaciones");

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

switch (operacion) {

    case "registrar":
        if (!nombre || !edad || !animal || !color || !enfermedad) {
            console.log("\n Por favor ingrese todos los datos \n");
        } else {
            registrar(nombre, edad, animal, color, enfermedad);
        }
        break;

    case "leer":
        leer();
        break;

    case "eliminar":
        eliminar();
        break;

    case "actualizar":
        if (!nombre || !edad || !animal || !color || !enfermedad) {
            console.log("\n Por favor ingrese todos los datos \n");
        } else {
            actualizar(nombre, edad, animal, color, enfermedad);
        }
        break;

    default:
        console.log("\n Operación desconocida \n");
}