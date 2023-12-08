const fs = require('fs').promises;

const json = 'citas.json';

const registrar = async (nombre, edad, animal, color, enfermedad) => {
    
    const cita = { 
        nombre, 
        edad, 
        animal, 
        color, 
        enfermedad 
    };
    
    const citas = JSON.parse(await fs.readFile(json, 'utf8') || '[]');

    citas.push(cita);
    await fs.writeFile(json, JSON.stringify(citas));
    console.log('\n Cita registrada con éxito \n');
}

const leer = async () => {
    const contenido = JSON.parse(await fs.readFile(json, 'utf8'));
    console.log(contenido);
}

const eliminar = async () => {
    await fs.writeFile(json, JSON.stringify([]));
    console.log('\n Citas eliminadas con éxito \n');
}

const actualizar = async (nombre, nuevaEdad, nuevoAnimal, nuevoColor, nuevaEnfermedad) => {

    const citaActualizada = { 
        nombre, 
        edad: nuevaEdad, 
        animal: nuevoAnimal, 
        color: nuevoColor, 
        enfermedad: nuevaEnfermedad 
    };

    const citas = JSON.parse(await fs.readFile(json, 'utf8') || '[]');
    
    const indice = citas.findIndex(c => c.nombre === nombre);
    if (indice !== -1) {
        citas[indice] = citaActualizada;
        await fs.writeFile(json, JSON.stringify(citas));
        console.log('\n Cita actualizada con éxito \n');
    } else {
        console.log('\n No se encontró la cita \n');
    }
}

module.exports = { registrar, leer, eliminar, actualizar }