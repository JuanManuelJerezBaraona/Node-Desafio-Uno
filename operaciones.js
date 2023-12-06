const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    
    const cita = {
        nombre, 
        edad, 
        animal, 
        color, 
        enfermedad
    };

    const citas = [...JSON.parse(fs.readFileSync('citas.json', 'utf8') || '[]'), cita];

    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log('Cita registrada con éxito');
}

const leer = () => {
    const contenido = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log(contenido);
}

const eliminar = () => {
    fs.writeFileSync('citas.json', JSON.stringify([]));
    console.log('Citas eliminadas con éxito');
}

// agregar función para actualizar (update)


module.exports = { registrar, leer, eliminar }