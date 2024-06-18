const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CursoSchema = new Schema({
    
})

const Curso = mongoose.model('cursos', CursoSchema)

module.exports = Curso;