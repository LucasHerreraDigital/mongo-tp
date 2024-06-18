const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db/models')

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/agregarNombre', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Conectado');
});

mongoose.connection.on('error', (err) => {
    console.log('Error de conexión :', err);
});

//importamos las rutas
const profesorRouter = require('')
const alumnoRouter = require('')
const CarreraRouter = require('')
const materiaRouter = require('')
const cursoRouter = require('')

//Usamos las rutas 
app.use(profesorRouter)
app.use(alumnoRouter)
app.use(materiaRouter)
app.use(cursoRouter)
app.use(CarreraRouter)

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

console.log("Estrategias de Persistencia - TP-2 (Versión MongoDB)")
