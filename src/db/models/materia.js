const mongoose = require('mongoose');
const  Schema = mongoose.Schema; 

const MateriaSchema = new Schema({ // aca tuve que googlear pero no estoy seguro si asi se creaba
    nombre: String,
    descripcion: String,
    carrera_Id: { } //no se como vincularlo a la carrera 
});

const Materia = mongoose.model('Materia', MateriaSchema);

module.exports = { Materia };