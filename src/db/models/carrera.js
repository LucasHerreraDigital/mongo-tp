const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarreraSchema = new Schema({
    nombre: String,
    descripcion: String,
    materias: [{   }]  // no se como vincularlo con la materia
});


const Carrera = mongoose.model('Carrera', CarreraSchema);

module.exports =  Carrera;