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
    const contenido = fs.readFileSync('citas.json', 'utf-8');
    console.log(contenido);
}

module.exports = { registrar, leer }